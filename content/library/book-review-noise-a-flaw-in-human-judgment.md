---
title: "Book Review: Noise a Flaw in Human Judgment"
date: 2021-07-22T18:06:23-03:00
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

Ten years after "[Thinking Fast and Slow](https://amzn.to/3ztD15o)", Daniel Kahneman writes another great book about human judgment and decision making. On “[Noise: A Flaw in Human Judgment](https://amzn.to/3ztD15o)” Kahneman (with Cass Sunstein and Olivier Sibony) focuses on how we make noisy decisions in our daily life and in our professional environments.

> Noise is variability in judgments that should be identical.

The authors define Noise as “the unwanted variability of judgments” where bias are systematic errors in the same direction. Today we’re very focused on eliminating or at least reducing bias and the book argues that noise is just as important a matter to focus on.

The book is full of examples of fields where there are noisy decisions, including medicine, justice, business and surprisingly (at least for me) fingerprint analysis.

{{< rawhtml >}}
<figure>
  <p><a href="https://freakonomics.com/podcast/pima-daniel-kahneman/"><img src="/images/kahneman-people-i-mostly-admire.png" alt="Why Our Judgment is Flawed — and What to Do About It (People I (Mostly) Admire Ep. 27"></a>
  <figcaption>Podcast interview with Daniel Kahneman: <a href="https://freakonomics.com/podcast/pima-daniel-kahneman/">Why Our Judgment is Flawed — and What to Do About It (People I (Mostly) Admire Ep. 27)</a></figcaption>
</figure>
{{< /rawhtml >}}


The book is structured as a set of 6 parts and three very useful appendices. In the first part, the authors define what Noise is, and how it affects the criminal justice system. In the second part, it introduces us to how to measure errors (bias and noise) using a concept called mean squared error. In the next 4 parts they use those concepts to analyse noise in different situations including project estimation, hiring, feedback cycles and much more.

There are some very important discussions about using algorithms and machine learning systems which can produce bias. They cite the book “[Weapons of Math Destruction](https://amzn.to/3y14fQz)” and argue that we should do better algorithms:

> These examples and many others lead to an inescapable conclusion: although a predictive algorithm in an uncertain world is unlikely to be perfect, it can be far less imperfect than noisy and often ­biased human judgment. This superiority holds in terms of both validity (good algorithms almost always predict better) and discrimination (good algorithms can be less biased than human judges). If algorithms make fewer mistakes than human experts do and yet we have an intuitive preference for for people, then our intuitive preferences should be carefully examined

In my opinion the most practical chapters are the appendices, because they present a set of guidelinies that can be applied in most companies. Appendix A explains how to conduct a Noise audit, so we can understand how much noise is present in the institution's decision process. Appendix B is a [checklist for decision observers](/images/noise-bias-checklist.png) (the professional that will help a team to make better decisions). Appendix C tells us how to improve predictions.

### Measuring Error

- [Mean Squared Error](https://en.wikipedia.org/wiki/Mean_squared_error)
- “Oddly, reducing bias and noise by the same amount has the same
  effect on accuracy.”
- Overall Error (MSE) = Bias 2 + Noise 2
- Chapter 5

### Group Polarization

> As I always suspected, ideas about politics and economics are a lot like movie stars. If people think that other people like them, such ideas can go far.

In chapter 8, there's an interesting discussion about what makes some ideas popular and how this can be misused to influence political opinion. It’s also described how people discussing together in a group can become more extremist in their ideas. This discussion together with the book “[Rules of Contagion](https://amzn.to/2Tu0pk1)” illuminated my world view on why the world is so polarized and with more extreme ideas circulating in the news and social media.

- “I’ve always been worried that when my team gets together, we end up confident and unified — ­and firmly committed to the course of action that we choose. I guess there’s something in our internal
  processes that isn’t going all that well!”
- "Group polarization. The basic idea is that when people speak with one another, they often end up at a more extreme point in line with their original inclinations. (...) Internal discussions often create greater confidence, greater unity, and greater extremism, frequently in the form of increased enthusiasm."
- Chapter 8

### Understanding: Causal x Statistical

- "When the authors of the Fragile Families challenge equate understanding with prediction (or the absence of one with the absence of the other), they use the term understanding in a specific sense. There are other meanings of the word: if you say you understand a mathematical concept or you understand what love is, you are probably not suggesting an ability to make any specific predictions.
  However, in the discourse of social science, and in most everyday conversations, a claim to understand something is a claim to understand what causes that thing. The sociologists who collected and studied the thousands of variables in the Fragile Families study were looking for the causes of the outcomes they observed. Physicians who understand what ails a patient are claiming that the pathology they have diagnosed is the cause of the symptoms they have observed. To understand is to describe a causal chain. The ability to make a prediction is a measure of whether such a causal chain has indeed been identified. And correlation, the measure of predictive accuracy, is a measure of how much causation we can explain."
- [Does causation imply correlation?](https://stats.stackexchange.com/questions/26300/does-causation-imply-correlation)
- Causal Thinking x Statistical Thinking
- Understanding in the Valley of the Normal
- "More broadly, our sense of understanding the world depends on our extraordinary ability to construct narratives that explain the events we observe. The search for causes is almost always successful because causes can be drawn from an unlimited reservoir of facts and beliefs about the world. As anyone who listens to the evening news knows, for example, few large movements of the stock market remain unexplained. The same news flow can “explain” either a fall of the indices (nervous investors are worried about the news!) or a rise (sanguine investors remain optimistic!)."
- Chapter 12

### How to make better decisions

- This chapter introduces "decision hygiene" and "decision observer" as ways of reducing noise and bias in the decision process. This will be later explored on the appendix.
- “Do you know what specific bias you’re fighting and in what direction
  it affects the outcome? If not, there are probably several biases at
  work, and it is hard to predict which one will dominate.”
- “Before we start discussing this decision, let’s designate a decision
  observer.”
- “We have kept good decision hygiene in this decision process;
  chances are the decision is as good as it can be.”
- Chapter 19

{{< rawhtml >}}
<figure>
  <p><img src="/images/noise-bias-checklist.png" alt="Noise Bias Checklist">
  <figcaption>A checklist for decision observer (from the boo Noise a Flaw in Human Judgment, Appendix B)</a></figcaption>
</figure>
{{< /rawhtml >}}

### Noise examples

- 20 - Sequencing Information in Forensic Science
- 21 - Selection and Aggregation in Forecasting
- 22 - Guidelines in Medicine
- 24 - Structure in Hiring

### Important chapters

- Review and Conclusion: Taking Noise Seriously
- Appendix A: How to Conduct a Noise Audit
- Appendix B: A Checklist for a Decision Observer
- Appendix C: Correcting Predictions

Together with [Kahneman's previous work](https://scholar.princeton.edu/kahneman/publications-0), this is a very important book that is worth to be re-read from time to time for it’s practical and philosophical value.

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
- [Daniel Kahneman on Priniceton](https://scholar.princeton.edu/kahneman/publications-0)
- [Noise: How to Overcome the High, Hidden Cost of Inconsistent Decision Making](https://rapaport.com/wp-content/uploads/2020/09/20171001-AR-HBR-Noise.pdf) by Daniel Kahneman, Andrew M. Rosenfield, Linnea Gandhi, and Tom Blaser
- #68 [Putting Your Intuition on Ice with Daniel Kahneman](https://fs.blog/daniel-kahneman/) — In this fascinating episode of the Knowledge Project Podcast, Psychologist and Nobel laureate Daniel Kahneman reveals the actions we can take to overcome the biases that cripple our decision-making, damper our thinking, and limit our effectiveness. Listen and Learn from the master.
- [A Chat with Daniel Kahneman](https://www.collaborativefund.com/blog/a-chat-with-daniel-kahneman/)
