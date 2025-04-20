// skoob-bookshelf.js
class SkoobBookshelf {
    constructor(config) {
      this.containerId = config.containerId || 'skoob-bookshelf-container';
      this.userId = config.userId || '133113';
      this.useMockData = config.useMockData || false;
      this.displayMode = 'cards'; // 'cards' or 'bookshelf'
      this.currentlyReading = [];
      this.recentlyRead = [];
      this.loading = true;
      this.error = null;
      this.lastUpdated = null;
      
      // Mock data for development or when API fails
      this.MOCK_DATA = {
        currentlyReading: [
          {
            id: 1001,
            title: "Thinking, Fast and Slow",
            author: "Daniel Kahneman",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1317793965i/11468377.jpg",
            pages: 499,
            publisher: "Farrar, Straus and Giroux",
            startDate: "2025-04-01",
            color: "bg-slate-800"
          },
          {
            id: 1002,
            title: "Sapiens: A Brief History of Humankind",
            author: "Yuval Noah Harari",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1420585954i/23692271.jpg",
            pages: 443,
            publisher: "Harper",
            startDate: "2025-03-28",
            color: "bg-stone-800"
          },
          {
            id: 1003,
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt & David Thomas",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1401432508i/4099.jpg",
            pages: 352,
            publisher: "Addison-Wesley Professional",
            startDate: "2025-03-20",
            color: "bg-amber-900"
          }
        ],
        recentlyRead: [
          {
            id: 2001,
            title: "The Design of Everyday Things",
            author: "Don Norman",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1442460745i/840.jpg",
            pages: 368,
            publisher: "Basic Books",
            startDate: "2025-02-15",
            finishDate: "2025-03-15",
            rating: 5,
            color: "bg-emerald-900"
          },
          {
            id: 2002,
            title: "Clean Code",
            author: "Robert C. Martin",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1436202607i/3735293.jpg",
            pages: 464,
            publisher: "Prentice Hall",
            startDate: "2025-01-10",
            finishDate: "2025-02-28",
            rating: 4,
            color: "bg-indigo-900"
          },
          {
            id: 2003,
            title: "Atomic Habits",
            author: "James Clear",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1655988385i/40121378.jpg",
            pages: 320,
            publisher: "Avery",
            startDate: "2025-01-01",
            finishDate: "2025-01-20",
            rating: 5,
            color: "bg-blue-900"
          },
          {
            id: 2004,
            title: "Zero to One",
            author: "Peter Thiel",
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1414347376i/18050143.jpg",
            pages: 224,
            publisher: "Crown Business",
            startDate: "2024-12-15",
            finishDate: "2024-12-30",
            rating: 4,
            color: "bg-purple-900"
          }
        ]
      };
      
      // Define book colors 
      this.bookColors = [
        '#744210', '#1a543f', '#233876', '#751a3d',  // amber-900, emerald-900, indigo-900, rose-900
        '#1e293b', '#44403c', '#27272a', '#262626',  // slate-800, stone-800, zinc-800, neutral-800
        '#1e3a8a', '#166534', '#581c87', '#7f1d1d'   // blue-900, green-900, purple-900, red-900
      ];
      
      this.init();
    }
    
    // Initialize the component
    init() {
      this.loadData();
      
      // Check if container exists
      const container = document.getElementById(this.containerId);
      if (!container) {
        console.error(`Container with ID "${this.containerId}" not found.`);
        return;
      }
      
      this.render();
    }
    
    // Get a random book color
    getRandomBookColor() {
      return this.bookColors[Math.floor(Math.random() * this.bookColors.length)];
    }
    
    // Format date string
    formatDate(dateString) {
      if (!dateString) return '';
      
      try {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
      } catch (e) {
        console.error('Error formatting date:', e);
        return dateString; // Return original string if formatting fails
      }
    }
    
    // Load data from API or mock data
    async loadData() {
      try {
        this.loading = true;
        this.render();
        
        if (this.useMockData) {
          // Use mock data
          setTimeout(() => {
            this.currentlyReading = this.MOCK_DATA.currentlyReading;
            this.recentlyRead = this.MOCK_DATA.recentlyRead;
            this.lastUpdated = new Date();
            this.loading = false;
            this.render();
          }, 700); // Simulate loading delay
          return;
        }
        
        // Fetch data from Skoob API (you may need to use a proxy to avoid CORS issues)
        const readingData = await this.fetchSkoobShelf(1); // Currently reading
        const readData = await this.fetchSkoobShelf(2); // Recently read
        
        // Process the reading data
        this.currentlyReading = this.processBooksData(readingData);
        
        // Process and sort the read data
        const processedRead = this.processBooksData(readData);
        this.recentlyRead = this.sortByFinishDate(processedRead).slice(0, 12); // Limit to 12 books
        
        this.lastUpdated = new Date();
        this.loading = false;
        this.render();
        
      } catch (err) {
        console.error('Error loading Skoob data:', err);
        this.error = `Failed to load books: ${err.message}`;
        
        // Fall back to mock data
        this.currentlyReading = this.MOCK_DATA.currentlyReading;
        this.recentlyRead = this.MOCK_DATA.recentlyRead;
        this.lastUpdated = new Date();
        
        this.loading = false;
        this.render();
      }
    }
    
    // Fetch data from a specific Skoob shelf
    async fetchSkoobShelf(shelfId) {
      try {
        // You might need to use a proxy server to avoid CORS issues
        // const proxyUrl = '/api/skoob-proxy';
        // const response = await fetch(`${proxyUrl}?userId=${this.userId}&shelfId=${shelfId}&page=1&limit=36`);
        
        // Direct API call (might face CORS issues)
        const response = await fetch(`https://www.skoob.com.br/v1/bookcase/books/${this.userId}/shelf_id:${shelfId}/page:1/limit:36/`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch shelf ${shelfId}: ${response.status}`);
        }
        
        const data = await response.json();
        return data.response || [];
        
      } catch (error) {
        console.error(`Error fetching shelf ${shelfId}:`, error);
        throw error;
      }
    }
    
    // Process books data from API
    processBooksData(books) {
      return books.map(book => ({
        id: book.edicao_id,
        title: book.edicao?.titulo || "Unknown Title",
        author: book.edicao?.autor || "Unknown Author",
        cover: book.edicao?.capa || "",
        pages: book.edicao?.paginas || null,
        publisher: book.edicao?.editora || "",
        startDate: book.dt_leitura_ini || null,
        finishDate: book.dt_leitura_fim || null,
        rating: book.rating || null,
        review: book.resenha || null,
        url: `https://www.skoob.com.br/livro/${book.edicao_id}`,
        color: this.getRandomBookColor()
      }));
    }
    
    // Sort books by finish date (newest first)
    sortByFinishDate(books) {
      return books.sort((a, b) => {
        if (!a.finishDate) return 1;
        if (!b.finishDate) return -1;
        return new Date(b.finishDate) - new Date(a.finishDate);
      });
    }
    
    // Render stars for ratings
    renderRatingStars(rating) {
      if (!rating) return '';
      
      let starsHtml = '';
      for (let i = 1; i <= 5; i++) {
        starsHtml += `<span class="${i <= rating ? 'star-filled' : 'star-empty'}">★</span>`;
      }
      
      return `<div class="book-rating">${starsHtml}</div>`;
    }
    
    // Toggle display mode
    toggleDisplayMode(mode) {
      this.displayMode = mode;
      this.render();
    }
    
    // Create HTML for books in cards mode
    renderCardsMode(books, sectionTitle, isCurrentlyReading) {
      let html = `
        <section class="bookshelf-section">
          <h2 class="section-title">${sectionTitle}</h2>
          <div class="books-cards-grid">
      `;
      
      books.forEach(book => {
        html += `
          <a href="${book.url}" class="book-card" target="_blank" rel="noopener noreferrer">
            <div class="book-card-inner">
              <div class="book-card-color-bar" style="background-color: ${book.color};"></div>
              <div class="book-card-content">
                <div class="book-card-header">
                  <h3 class="book-title">${book.title}</h3>
                  ${book.pages ? `<div class="book-pages">${book.pages}p</div>` : ''}
                </div>
                <p class="book-author">${book.author}</p>
                ${!isCurrentlyReading && book.rating ? this.renderRatingStars(book.rating) : ''}
                <div class="book-meta">
                  ${isCurrentlyReading && book.startDate 
                    ? `<p>Started: ${this.formatDate(book.startDate)}</p>` 
                    : ''}
                  ${!isCurrentlyReading && book.finishDate 
                    ? `<p>Completed: ${this.formatDate(book.finishDate)}</p>` 
                    : ''}
                </div>
              </div>
            </div>
          </a>
        `;
      });
      
      html += `
          </div>
        </section>
      `;
      
      return html;
    }
    
    // Create HTML for books in bookshelf mode
    renderBookshelfMode(books, sectionTitle, isCurrentlyReading) {
      let html = `
        <section class="bookshelf-section">
          <h2 class="section-title">${sectionTitle}</h2>
          <div class="bookshelf-container">
            <div class="bookshelf">
      `;
      
      books.forEach(book => {
        html += `
          <a href="${book.url}" class="book-spine" target="_blank" rel="noopener noreferrer" style="background-color: ${book.color};">
            <span class="book-spine-title">${book.title}</span>
            ${!isCurrentlyReading && book.rating ? `<span class="book-spine-rating">★</span>` : ''}
            <div class="book-tooltip">
              <h4>${book.title}</h4>
              <p>${book.author}</p>
              ${!isCurrentlyReading && book.rating ? this.renderRatingStars(book.rating) : ''}
              ${book.pages ? `<p class="book-tooltip-pages">${book.pages} pages</p>` : ''}
            </div>
          </a>
        `;
      });
      
      html += `
            </div>
            <div class="bookshelf-edge"></div>
          </div>
        </section>
      `;
      
      return html;
    }
    
    // Render the component
    render() {
      const container = document.getElementById(this.containerId);
      if (!container) return;
      
      // If loading
      if (this.loading) {
        container.innerHTML = `
          <div class="loading-container">
            <div class="loading-icon"></div>
            <p class="loading-text">Loading literary collection...</p>
          </div>
        `;
        return;
      }
      
      // If error with no data
      if (this.error && this.currentlyReading.length === 0 && this.recentlyRead.length === 0) {
        container.innerHTML = `
          <div class="error-container">
            <h3>Error</h3>
            <p>${this.error}</p>
          </div>
        `;
        return;
      }
      
      // Start building HTML
      let html = `
        <div class="skoob-bookshelf">
          <div class="bookshelf-header">
            <div class="bookshelf-title">
              <h1>Literary Collection</h1>
              <p>A curated selection from my personal library</p>
            </div>
            
            <div class="display-toggle">
              <button id="cards-mode-btn" class="${this.displayMode === 'cards' ? 'active' : ''}">Cards</button>
              <button id="bookshelf-mode-btn" class="${this.displayMode === 'bookshelf' ? 'active' : ''}">Bookshelf</button>
            </div>
          </div>
          
          ${this.error ? `
            <div class="warning-banner">
              <p>${this.error} - Showing available data.</p>
            </div>
          ` : ''}
      `;
      
      // Currently Reading Section
      if (this.currentlyReading.length > 0) {
        html += this.displayMode === 'cards' 
          ? this.renderCardsMode(this.currentlyReading, 'Current Reading', true)
          : this.renderBookshelfMode(this.currentlyReading, 'Current Reading', true);
      }
      
      // Recently Read Section
      if (this.recentlyRead.length > 0) {
        html += this.displayMode === 'cards' 
          ? this.renderCardsMode(this.recentlyRead, 'Recently Completed', false)
          : this.renderBookshelfMode(this.recentlyRead, 'Recently Completed', false);
      }
      
      // Last updated timestamp
      if (this.lastUpdated) {
        html += `
          <div class="last-updated">
            Last updated: ${this.lastUpdated.toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </div>
        `;
      }
      
      // Close main container
      html += `</div>`;
      
      // Update container
      container.innerHTML = html;
      
      // Add event listeners
      this.addEventListeners();
    }
    
    // Add event listeners to buttons
    addEventListeners() {
      const cardsBtn = document.getElementById('cards-mode-btn');
      const bookshelfBtn = document.getElementById('bookshelf-mode-btn');
      
      if (cardsBtn) {
        cardsBtn.addEventListener('click', () => this.toggleDisplayMode('cards'));
      }
      
      if (bookshelfBtn) {
        bookshelfBtn.addEventListener('click', () => this.toggleDisplayMode('bookshelf'));
      }
    }
  }
  
  // Initialize when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', function() {
    window.skoobBookshelf = new SkoobBookshelf({
      containerId: 'skoob-bookshelf-container',
      userId: '133113',
      useMockData: true // Set to false to use real API data
    });
  });