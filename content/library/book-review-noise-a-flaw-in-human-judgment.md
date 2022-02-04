---
title: "Book Review: Noise a Flaw in Human Judgment"
date: 2021-07-31T18:06:23-03:00
draft: true

---
{{< rawhtml >}}
<style>
article.books { width: 100% }
.bookshelf { margin: 2rem auto; text-align: center; position: relative; }
.book-grid { z-index: 2; position: relative; -webkit-transform: translateY(-15px); transform: translateY(-15px); }
.book-grid ul { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(3, 1fr); }
/*.book-grid ul li {  padding-left: 1.5em; }*/
.book-grid ul img { display: block; box-shadow: 0px -5px 20px 2px rgba(0, 0, 0, 0.3); width: 200px; height: 300px; -o-object-fit: cover; object-fit: cover; }
.book-description { width: 200px; background-color: #000; height: 300px; font-size: 1em; padding: 5px;}
.book-description a { color: #fff; word-break: normal }
.shelf { position: absolute; bottom: 0; left: 0; width: 100%; height: 1rem; background-color: #f9f9f9; border-radius: 2px; z-index: 3; }
.shelf-shadows { position: absolute; bottom: 0; left: 0; width: 100%; height: 1rem; border-radius: 2px; z-index: 1;
  box-shadow: 0px -5px 3px 0px rgba(170, 170, 170, 0.2), 0px 15px 20px 0px rgba(170, 170, 170, 0.7), 0px 5px 5px 0px rgba(119, 119, 119, 0.3);
}
.book-grid ul li .book-description { display: none; }
.book-grid ul li:hover img { display: none; }
.book-grid ul li:hover { margin-bottom: -3em !important; }
.book-grid ul li:hover .book-description { display: block; }
@media screen and (max-width: 1024px) {
​        .book-grid ul { grid-template-columns: repeat(3, 1fr); }
        .book-grid ul li { padding-left: 1.0em; }
}
@media screen and (max-width: 800px) {
​        .book-grid ul { grid-template-columns: repeat(1, 1fr); }
​        .book-grid ul li {  padding-bottom*: 1.5em; }
​        .shelf-shadows, .shelf { display: none;}
​        article { margin-bottom: -5em !important; }
}
</style>
{{< /rawhtml >}}
[![Noise a Flaw in Human Judgment](/images/noise-book.jpg)](https://amzn.to/3ztD15o)

> Measurement, in everyday life as in science, is the act of using an instrument to assign a value on a scale to an object or event. You measure the length of a carpet in inches, using a tape measure. You measure the temperature in degrees Fahrenheit or Celsius by consulting a thermometer. The act of making a judgment is similar. When judges determine the appropriate prison term for a crime, they assign a value on a scale. So do underwriters when they set a dollar value to insure a risk, or doctors when they make a diagnosis. (The scale need not be numerical: “guilty beyond a reasonable doubt,” “advanced melanoma,” and “surgery is recommended” are judgments, too.) **Judgment can therefore be described as measurement in which the instrument is a human mind.**

Ten years after "[Thinking Fast and Slow](https://amzn.to/3ztD15o)", Daniel Kahneman writes another great book about human judgment and decision making. “[Noise: A Flaw in Human Judgment](https://amzn.to/3ztD15o)” Together with Cass Sunstein and Olivier Sibony, Kahneman now focuses on how we make noisy decisions in our daily life and in our professional environments.

> Noise is variability in judgments that should be identical.

The authors define Noise as “the unwanted variability of judgments” where bias are systematic errors in the same direction. Nowadays we’re very focused on eliminating or at least reducing bias and the book argues that noise is just as important a matter to focus on.

The book is full of examples of noisy decisions in many different fields, including medicine, justice, business and surprisingly (at least for me) fingerprint analysis.

{{< rawhtml >}}

<figure>
  <p><a href="https://freakonomics.com/podcast/pima-daniel-kahneman/"><img src="/images/kahneman-people-i-mostly-admire.png" alt="Why Our Judgment is Flawed — and What to Do About It (People I (Mostly) Admire Ep. 27"></a>
  <figcaption>Podcast interview with Daniel Kahneman: <a href="https://freakonomics.com/podcast/pima-daniel-kahneman/">Why Our Judgment is Flawed — and What to Do About It (People I (Mostly) Admire Ep. 27)</a></figcaption>
</figure>
{{< /rawhtml >}}


The book is structured as a set of six parts and three very useful appendices. In the first part, the authors define the concept of Noise and how it affects the criminal justice system. The second part introduces a method to measure errors (bias and noise) based on a concept called mean squared error. In the following four parts of the book, the authors use those concepts to analyse noise in many different situations such as project estimation, hiring, feedback cycles and more.

*Noise* also raises a very important discussion about how algorithms and machine learning systems can produce bias. There is a reference to Cathy O’Neil’s “[Weapons of Math Destruction](https://amzn.to/3y14fQz)” and the authors argue that improving algorithms is worth the effort.

> These examples and many others lead to an inescapable conclusion: although a predictive algorithm in an uncertain world is unlikely to be perfect, it can be far less imperfect than noisy and often biased human judgment. This superiority holds in terms of both validity (good algorithms almost always predict better) and discrimination (good algorithms can be less biased than human judges). If algorithms make fewer mistakes than human experts do and yet we have an intuitive preference for people, then our intuitive preferences should be carefully examined.

Finally, the appendices offer very practical advice, presenting a set of guidelinies that can be applied in most companies. Appendix A explains how to conduct a Noise audit, so we can understand how much noise is present in the institution’s decision process. Appendix B is a [checklist for decision observers](/images/noise-bias-checklist.png) (the professional that will help a team to make better decisions), and appendix C tells us how to improve predictions.

### How can Error be measured?

> - “Oddly, reducing bias and noise by the same amount has the same
>   effect on accuracy.”
> - “Reducing noise in predictive judgment is always useful, regardless of
>   what you know about bias.”
> - “Predictive judgments are involved in every decision, and accuracy
>   should be their only goal. Keep your values and your facts
>   separate.”

In the XVIII century, Carl Friedrich Gauss and Adrien-Marie Legendre created the [method of least squares](https://en.wikipedia.org/wiki/Least_squares), a way to rule for scoring the contribution of individual errors to the overall error. This method has applications in many areas, including [finance](https://www.investopedia.com/terms/l/least-squares-method.asp), [statistics](https://www.jmp.com/en_ch/statistics-knowledge-portal/what-is-regression/the-method-of-least-squares.html), and Noise analysis. The authors use this method to get the error equations -- that remind us of the Pythagorean theorem:

> Error in a single measurement = Bias + Noisy Error
>
> Overall Error (MSE) = Bias² + Noise²

### Group Polarization

> - “As I always suspected, ideas about politics and economics are a lot like movie stars. If people think that other people like them, such ideas can go far.”
> - “I’ve always been worried that when my team gets together, we end up confident and unified — and firmly committed to the course of action that we choose. I guess there’s something in our internal processes that isn’t going all that well!”
> - “Group polarization. The basic idea is that when people speak with one another, they often end up at a more extreme point in line with their original inclinations. (…) Internal discussions often create greater confidence, greater unity, and greater extremism, frequently in the form of increased enthusiasm.”

Chapter eight mentions one of the most relevant matters of our time – it analyses what makes some ideas popular and how this can be misused to influence political opinion. The authors also explain how group discussions can make each individual more extremist in their ideas. This chapter reminded me of another book I’ve recently read, called “[Rules of Contagion](https://amzn.to/2Tu0pk1)”. Both these readings illuminated my world view an gave me a better understanding of the increasing polarization we see nowadays, and how easily extreme ideas spread on social media.

### Understanding: Causal Thinking x Statistical Thinking

> "When the authors of the Fragile Families challenge equate understanding with prediction (or the absence of one with the absence of the other), they use the term understanding in a specific sense. There are other meanings of the word: if you say you understand a mathematical concept or you understand what love is, you are probably not suggesting an ability to make any specific predictions.
>
> However, **in the discourse of social science, and in most everyday conversations, a claim to understand something is a claim to understand what causes that thing**. The sociologists who collected and studied the thousands of variables in the Fragile Families study were looking for the causes of the outcomes they observed. Physicians who understand what ails a patient are claiming that the pathology they have diagnosed is the cause of the symptoms they have observed. **To understand is to describe a causal chain**. The ability to make a prediction is a measure of whether such a causal chain has indeed been identified. And correlation, the measure of predictive accuracy, is a measure of how much causation we can explain."

On chapter 12, in my opinion the most interesting chapter of the book, there is a discussion on what means to understand. We usually think about cause and effects, which can be highly misleading when we're dealing with complex phenomenons.  Causal thinking creates stories to explain how specific events affect the outcomes. In the chapter they explain this using an example of an social worker:

> To experience causal thinking, picture yourself as a social worker who follows the cases of many underprivileged families. You have just heard that one of these families, the Joneses, has been evicted. Your reaction to this event is informed by what you know about the Joneses. As it happens, Jessica Jones, the family’s breadwinner, was laid off a few months ago. She could not find another job, and since then, she has been unable to pay the rent in full. She made partial payments, pleaded with the building manager several times, and even asked you to intervene (you did, but he remained unmoved). Given this context, the Joneses’ eviction is sad but not surprising. It feels, in fact, like the logical end of a chain of events, the inevitable denouement of a foreordained tragedy.

It's easy to look for narratives and stories that explains the world, this is the default method that we form our own world view -- and it's also reinforced by stories on the media and how we learn from history. People think in stories, not statistics

> "More broadly, our sense of understanding the world depends on our extraordinary ability to construct narratives that explain the events we observe. The search for causes is almost always successful because causes can be drawn from an unlimited reservoir of facts and beliefs about the world. As anyone who listens to the evening news knows, for example, few large movements of the stock market remain unexplained. The same news flow can “explain” either a fall of the indices (nervous investors are worried about the news!) or a rise (sanguine investors remain optimistic!)."

Statistical thinking on the other hand, is a more sophisticated and effortful way of thinking. It requires the energy and attention of [System 2](https://www.scientificamerican.com/article/kahneman-excerpt-thinking-fast-and-slow/) (slow, deliberate thought) and also needs some level of specialized training. It's applied on scientific research, and it takes into consideration that the world is much more complex than a simple cause and effect process. For the example above, the eviction of Joneses is seen as statistically likely outcome, given prior observations of cases that shares similarity, using statistics and data analysis to do an informed prediction. 

### How to make better decisions

> - “Do you know what specific bias you’re fighting and in what direction
>   it affects the outcome? If not, there are probably several biases at
>   work, and it is hard to predict which one will dominate.”
> - “Before we start discussing this decision, let’s designate a decision
>   observer.”
> - “We have kept good decision hygiene in this decision process;
>   chances are the decision is as good as it can be.”

Many organizations have as one of their goals debiasing judgments, and in order to achieve that they introduced a series of process and technologies. On chapter 19, the authors discuss about those interventions and explains how we can incorporate them on our own organizations. *Decision hygiene* is the process for reducing noise in the decision process, and following it's principles means that you are adopting mechanisms that reduces noises without ever knowing which errors you're avoiding. Some of those principles are:

- Sequencing information to limit the formation of premature intuitions. Sometimes, less information is better.
- When you get a second person to judge on a decision, he should not be aware of the first judgment.
- Aggregating multiple independent estimates
- Designating a decision observer to identify signs of bias

{{< rawhtml >}}
<figure>
  <p><img src="/images/noise-bias-checklist.png" alt="Noise Bias Checklist">
  <figcaption>A checklist for decision observer (from the book Noise a Flaw in Human Judgment, Appendix B)</a></figcaption>
</figure>

{{< /rawhtml >}}

### Important chapters

- Review and Conclusion: Taking Noise Seriously
- Appendix A: How to Conduct a Noise Audit
- Appendix B: A Checklist for a Decision Observer
- Appendix C: Correcting Predictions
- 20 - Sequencing Information in Forensic Science
- 21 - Selection and Aggregation in Forecasting
- 22 - Guidelines in Medicine
- 24 - Structure in Hiring

Bias is a problem and so is noise. It's a false to hope that becoming aware of the errors we'll make better decisions, but it is possible to design and create better systems and organizations to do better judgments.  Together with [Kahneman's previous work](https://scholar.princeton.edu/kahneman/publications-0), this is a very important book that is worth to be re-read from time to time for it’s practical and philosophical value.

### Further readings

{{< rawhtml >}}
<article class="books">
        <div class="bookshelf">
                <div class="book-grid">
                        <ul>
                                <li>
                                        <a href="https://amzn.to/3iD7R4R">
                                                <img src="/images/book-superforecasting.jpg" alt="Superforecasting: The Art and Science of Prediction" class="book-image">
                                        </a>
                                        <p class="book-description">
                                                <a href="https://amzn.to/3iD7R4R">Superforecasting: The Art and Science of Prediction</a>
                                                <span><br>Philip Tetlok</span>
                                        </p>
                                </li>
                                <li>
                                        <a href="https://amzn.to/2W3RFlx">
                                                <img src="/images/book-fast-and-slow.jpg" alt="Thinking Fast and Slow" class="book-image">
                                        </a>
                                        <p class="book-description">
                                                <a href="https://amzn.to/2W3RFlx">Thinking Fast and Slow</a>
                                                <span><br>Daniel Kahneman</span>
                                        </p>
                                </li>
                                <li>
                                        <a href="https://amzn.to/3eP5n2l">
                                                <img src="/images/book-mindware.webp" alt="Mindware" class="book-image">
                                        </a>
                                        <p class="book-description">
                                                <a href="https://amzn.to/3eP5n2l">Mindware: Tools for Smart Thinking</a>
                                                <span><br>Richard Nisbett</span>
                                        </p>
                                </li>
                                <li>
                                        <a href="https://amzn.to/2ULMLJA">
                                                <img src="/images/book-misbehaving.jpg" alt="Misbehaving: The Making of Behavioral Economics" class="book-image">
                                        </a>
                                        <p class="book-description">
                                                <a href="https://amzn.to/2ULMLJA">Misbehaving: The Making of Behavioral Economics</a>
                                                <span><br>Richard Thaler</span>
                                        </p>
                                </li>
                                <li>
                                        <a href="https://amzn.to/3kSY1P8">
                                                <img src="/images/book-you-are-about-to-make-a-terrible-mistake.jpg" alt="You are about to make a terrible mistake" class="book-image">
                                        </a>
                                        <p class="book-description">
                                                <a href="https://amzn.to/3kSY1P8">You are about to make a terrible mistake</a>
                                                <span><br>Richard Thaler</span>
                                        </p>
                                </li>
                                <li>
                                        <a href="https://amzn.to/3y14fQz">
                                                <img src="/images/book-weapons-of-math-destruction.jpg" alt="Weapons of Math Destruction" class="book-image">
                                        </a>
                                        <p class="book-description">
                                                <a href="https://amzn.to/3y14fQz">Weapons of Math Destruction</a>
                                                <span><br>Cathy O'Neil</span>
                                        </p>
                                </li>
                        </ul>
                </div>
        </div>
</article>
{{< /rawhtml >}}

- [Best Books on Behavioral Economics](https://fivebooks.com/best-books/behavioural-economics-dan-ariely/)
- [Daniel Kahneman on Princeton](https://scholar.princeton.edu/kahneman/publications-0)
- [Noise: How to Overcome the High, Hidden Cost of Inconsistent Decision Making](https://hbr.org/2016/10/noise) by Daniel Kahneman, Andrew M. Rosenfield, Linnea Gandhi, and Tom Blaser
- #68 [Putting Your Intuition on Ice with Daniel Kahneman](https://fs.blog/daniel-kahneman/)
- [A Chat with Daniel Kahneman](https://www.collaborativefund.com/blog/a-chat-with-daniel-kahneman/)
- [Bias and Noise: Daniel Kahneman on Errors in Decision-Making](https://natematias.medium.com/bias-and-noise-daniel-kahneman-onerrors-in-decision-making-6bc844ff5194)
- [Bias Is a Big Problem. But So Is ‘Noise.’](https://www.nytimes.com/2021/05/15/opinion/noise-bias-kahneman.html) by Daniel Kahneman
