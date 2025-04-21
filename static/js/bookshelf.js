// Simple Skoob Bookshelf
document.addEventListener('DOMContentLoaded', function() {
  // Configuration
  const userId = '133113'; // Your Skoob user ID
  const useMockData = false; // Set to false to use actual API

  // DOM elements
  const bookshelfContainer = document.getElementById('skoob-bookshelf');
  const displayToggle = document.getElementById('display-toggle');
  const currentlyReadingSection = document.getElementById('currently-reading');
  const recentlyReadSection = document.getElementById('recently-read');
  const loadingIndicator = document.getElementById('loading-indicator');
  
  // Book colors for spines
  const bookColors = [
    '#744210', '#1a543f', '#233876', '#751a3d',
    '#1e293b', '#44403c', '#27272a', '#262626',
    '#1e3a8a', '#166534', '#581c87', '#7f1d1d'
  ];
  
  // Mock data for development or fallback
  const mockData = {
    currentlyReading: [
      {
        id: 1001,
        title: "Thinking, Fast and Slow",
        author: "Daniel Kahneman",
        pages: 499,
        startDate: "2025-04-01"
      },
      {
        id: 1002,
        title: "Sapiens: A Brief History of Humankind",
        author: "Yuval Noah Harari",
        pages: 443,
        startDate: "2025-03-28"
      },
      {
        id: 1003,
        title: "The Pragmatic Programmer",
        author: "Andrew Hunt & David Thomas",
        pages: 352,
        startDate: "2025-03-20"
      }
    ],
    recentlyRead: [
      {
        id: 2001,
        title: "The Design of Everyday Things",
        author: "Don Norman",
        pages: 368,
        finishDate: "2025-03-15",
        rating: 5
      },
      {
        id: 2002,
        title: "Clean Code",
        author: "Robert C. Martin",
        pages: 464,
        finishDate: "2025-02-28",
        rating: 4
      },
      {
        id: 2003,
        title: "Atomic Habits",
        author: "James Clear",
        pages: 320,
        finishDate: "2025-01-20",
        rating: 5
      },
      {
        id: 2004,
        title: "Zero to One",
        author: "Peter Thiel",
        pages: 224,
        finishDate: "2024-12-30",
        rating: 4
      }
    ]
  };
  
  // State
  let viewMode = 'bookshelf'; // 'bookshelf' or 'cards'
  let currentlyReading = [];
  let recentlyRead = [];
  
  // Format date string
  function formatDate(dateString) {
    if (!dateString) return '';
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      });
    } catch (e) {
      return dateString;
    }
  }
  
  // Get random book color
  function getRandomColor() {
    return bookColors[Math.floor(Math.random() * bookColors.length)];
  }
  
  // Render rating stars
  function renderStars(rating) {
    if (!rating) return '';
    let stars = '';
    for (let i = 1; i <= 5; i++) {
      stars += `<span class="${i <= rating ? 'star-filled' : 'star-empty'}">★</span>`;
    }
    return stars;
  }
  
  // Create book spine for bookshelf view
  function createBookSpine(book, isCurrentlyReading) {
    const color = getRandomColor();
    const spine = document.createElement('a');
    spine.href = `https://www.skoob.com.br/livro/${book.id}`;
    spine.target = '_blank';
    spine.className = 'book-spine';
    spine.style.backgroundColor = color;
    
    spine.innerHTML = `
      <span class="spine-title">${book.title}</span>
      ${!isCurrentlyReading && book.rating ? '<span class="spine-rating">★</span>' : ''}
      <div class="book-tooltip">
        <h4>${book.title}</h4>
        <p>${book.author}</p>
        ${!isCurrentlyReading && book.rating ? 
          `<div class="book-stars">${renderStars(book.rating)}</div>` : 
          ''}
        ${book.pages ? `<p class="book-pages">${book.pages} pages</p>` : ''}
      </div>
    `;
    
    return spine;
  }
  
  // Create book card for cards view
  function createBookCard(book, isCurrentlyReading) {
    const color = getRandomColor();
    const card = document.createElement('a');
    card.href = `https://www.skoob.com.br/livro/${book.id}`;
    card.target = '_blank';
    card.className = 'book-card';
    
    card.innerHTML = `
      <div class="card-inner">
        <div class="card-color-bar" style="background-color: ${color};"></div>
        <div class="card-content">
          <div class="card-header">
            <h3>${book.title}</h3>
            ${book.pages ? `<div class="card-pages">${book.pages}p</div>` : ''}
          </div>
          <p class="card-author">${book.author}</p>
          ${!isCurrentlyReading && book.rating ? 
            `<div class="card-stars">${renderStars(book.rating)}</div>` : 
            ''}
          <div class="card-meta">
            ${isCurrentlyReading && book.startDate ? 
              `<p>Started: ${formatDate(book.startDate)}</p>` : 
              ''}
            ${!isCurrentlyReading && book.finishDate ? 
              `<p>Completed: ${formatDate(book.finishDate)}</p>` : 
              ''}
          </div>
        </div>
      </div>
    `;
    
    return card;
  }
  
  // Render books in selected view mode
  function renderBooks() {
    // Clear sections
    currentlyReadingSection.innerHTML = '';
    recentlyReadSection.innerHTML = '';
    
    // Add the shelf or grid containers based on view mode
    if (viewMode === 'bookshelf') {
      currentlyReadingSection.innerHTML = `
        <div class="bookshelf">
          <div class="shelf-books"></div>
          <div class="shelf-edge"></div>
        </div>
      `;
      
      recentlyReadSection.innerHTML = `
        <div class="bookshelf">
          <div class="shelf-books"></div>
          <div class="shelf-edge"></div>
        </div>
      `;
      
      const currentShelf = currentlyReadingSection.querySelector('.shelf-books');
      const recentShelf = recentlyReadSection.querySelector('.shelf-books');
      
      // Add book spines to shelves
      currentlyReading.forEach(book => {
        currentShelf.appendChild(createBookSpine(book, true));
      });
      
      recentlyRead.forEach(book => {
        recentShelf.appendChild(createBookSpine(book, false));
      });
    } else {
      // Cards view
      currentlyReadingSection.innerHTML = '<div class="books-grid"></div>';
      recentlyReadSection.innerHTML = '<div class="books-grid"></div>';
      
      const currentGrid = currentlyReadingSection.querySelector('.books-grid');
      const recentGrid = recentlyReadSection.querySelector('.books-grid');
      
      // Add book cards to grids
      currentlyReading.forEach(book => {
        currentGrid.appendChild(createBookCard(book, true));
      });
      
      recentlyRead.forEach(book => {
        recentGrid.appendChild(createBookCard(book, false));
      });
    }
  }
  
  // Fetch books from Skoob API
  async function fetchSkoobShelf(shelfId) {
    try {
      const response = await fetch(`https://www.skoob.com.br/v1/bookcase/books/${userId}/shelf_id:${shelfId}/page:1/limit:9/`);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch shelf ${shelfId}`);
      }
      
      const data = await response.json();
      return data.response || [];
    } catch (error) {
      console.error(`Error fetching shelf ${shelfId}:`, error);
      throw error;
    }
  }
  
  // Process books data from API
  function processBooks(books) {
    return books.map(book => ({
      id: book.edicao_id,
      title: book.edicao?.titulo || "Unknown Title",
      author: book.edicao?.autor || "Unknown Author",
      pages: book.edicao?.paginas || null,
      startDate: book.dt_leitura_ini || null,
      finishDate: book.dt_leitura_fim || null,
      rating: book.rating || null
    }));
  }
  
  // Sort books by date
  function sortByDate(books, dateField) {
    return books.sort((a, b) => {
      if (!a[dateField]) return 1;
      if (!b[dateField]) return -1;
      return new Date(b[dateField]) - new Date(a[dateField]);
    });
  }
  
  // Load data from API or mock data
  async function loadData() {
    loadingIndicator.style.display = 'flex';
    
    try {
      if (useMockData) {
        // Use mock data
        setTimeout(() => {
          currentlyReading = mockData.currentlyReading;
          // Sort and limit to 7 most recently completed books
          recentlyRead = sortByDate(mockData.recentlyRead);
          renderBooks();
          loadingIndicator.style.display = 'none';
        }, 700); // Simulate loading
        return;
      }
      
      // Fetch real data
      const readingData = await fetchSkoobShelf(2); // Currently reading
      const readData = await fetchSkoobShelf(1); // Recently read
      
      currentlyReading = processBooks(readingData);
      const processedRead = processBooks(readData);
      
      // Sort and limit to 7 most recently completed books
      recentlyRead = sortByDate(processedRead);
      
      renderBooks();
    } catch (error) {
      console.error('Error loading data:', error);
      // Fallback to mock data
      currentlyReading = mockData.currentlyReading;
      // Sort and limit to 7 most recently completed books for fallback data too
      recentlyRead = sortByDate(mockData.recentlyRead);
      renderBooks();
    } finally {
      loadingIndicator.style.display = 'none';
    }
  }
  
  // Switch between display modes
  function switchDisplayMode(mode) {
    viewMode = mode;
    
    // Update active button
    const buttons = displayToggle.querySelectorAll('button');
    buttons.forEach(button => {
      if (button.dataset.mode === mode) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
    
    renderBooks();
  }
  
  // Set up event listeners
  function setupEventListeners() {
    const buttons = displayToggle.querySelectorAll('button');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        switchDisplayMode(button.dataset.mode);
      });
    });
  }
  
  // Initialize
  function init() {
    setupEventListeners();
    loadData();
  }
  
  // Start the app
  init();
});
