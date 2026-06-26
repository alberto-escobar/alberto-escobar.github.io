# Review of my first year in BCS

I completed my first year of BCS and wanted to provide a review of the courses I took during 2023W1 and 2023W2. For each course I give scores based on the following aspects:

- **Utility**: How useful the course was for later courses or projects
- **Interest**: How interesting the course was
- **Difficulty**: How difficult the course was

## ENGL 110 - Approaches to Literature and Culture

This course is an introductory English literature course. I had to take it since it was a requirement for any student in the sciences to take one English course in their degree. The course was structured around reading four novels throughout the semester, and for each novel we had to write an essay discussing a topic from a list the professor provided. We could also write about our own topics with the professor's approval. The books I read were:

- *Beloved* by Toni Morrison
- *The Marrow Thieves* by Cherie Dimaline
- *Frankenstein* by Mary Shelley
- *The Best We Could Do* by Thi Bui

The course was interesting and introduced me to some excellent novels, as well as to the academic dialogues surrounding each book and how they connect to issues in the world such as racism, feminism, war, and colonialism. I found unexpected enjoyment in writing these essays, but the difficulty I encountered was that my essays consistently scored the same regardless of how much help, proofreading, or rewriting I put into improving them. I believe that unless you are the next Alexander Hamilton, you will always score around the class average. While this course doesn't serve much purpose in terms of computer science, I find the conversations it sparks are important, and they have shaped the way I discuss these topics with people.

- **Utility**: 1/5
- **Interest**: 4/5
- **Difficulty**: 3/5

## CPSC 121 - Models of Computation

This course explored several topics relating to logic, logical circuits, and proofs. The course structure included weekly labs, tutorials, and quizzes, monthly assignments, two midterms, tutorial and lecture participation, and a final exam. This meant a lot of time was spent each week reviewing material and completing the weekly tasks.

Personally, I found it hard to stay focused while studying for this course, as the material is a bit dry. That said, the material on proofs will be useful for algorithms, the material on logical circuits was useful for low-level hardware courses, and logic was useful for both low-level and algorithm courses. I believe this course should not be overlooked by students, as it provides the mental tools and foundation for later courses. My only critique is that the course was quite dense with information, and students would benefit from splitting it into two: one for proofs and one for logic. That way students could gain a solid understanding of both topics over two courses rather than a surface-level understanding of both in one.

- **Utility**: 3/5
- **Interest**: 2/5
- **Difficulty**: 4/5

## CPSC 210 - Software Construction

This course was centered around object-oriented design. The course consisted of a course project, two midterms, lab exercises, and a final exam.

I genuinely believe this was probably the best course I could have taken at the very start of my degree, and the course project really is what helped me maintain my interest. It helped immensely to understand the core concepts of software design and UML, and developing a Java project early on also helped boost my resume. The project I built was a greenhouse manager game, and I had a ton of fun building it and demoing it to my TA. I found it really tested my ability to translate object-oriented design concepts into Java and to handle Java syntax on the fly during midterms and exams. I recommend building something you are genuinely interested in for this course, as ownership of the project gives you more desire to build it out well.

- **Utility**: 5/5
- **Interest**: 4/5
- **Difficulty**: 3/5

*[image of game]*

## STAT 302 - Introduction to Probability

This course covered the fundamentals of probability. The course structure was weekly assignments (a mix of paper and WeBWorK assignments), weekly quizzes, two midterms, and a final exam.

I became heavily interested in this course, as it helped bridge a lot of gaps in my knowledge of statistics from my previous degree. A big motivation I had in maximizing my learning was that probability is very useful in computer systems, machine learning, and gambling. I believe that if you have any interest in these topics (especially machine learning), this course is well worth taking seriously.

- **Utility**: 4/5
- **Interest**: 4/5
- **Difficulty**: 3/5

## CPSC 213 - Introduction to Computer Systems

This course is an introduction to computer architecture. The course structure involved participation in weekly labs and lectures, weekly assignments, three quizzes (which really felt more like midterms), and a final exam.

This course is often regarded as one of the hardest courses you take in second-year computer science. Its difficulty comes from the amount of work that has to go into frequent assignments, hard quizzes, and general review. Another reason for the difficulty is that it involves rebuilding your way of thinking about computation, moving from conventional high-level languages (like Python and Java) to much lower levels like assembly and C. The final reason is that this course is known for final exams that are dreadfully difficult and will make you leave the exam hall feeling like you have failed. Rest assured, they always seem to curve the exam in such a way that you did better than you think you did.

You will be introduced to the various concepts of computation, the parts of a computer, how each part works with the others, and the abstractions used in computation that make programming possible (e.g. stack, heap, threads, locks, pointers, etc.). If you are a data-science-oriented person this course will be a hurdle, but if you have any interest in systems, I believe this course is essential to understanding how computer systems work at the very lowest level. My only critique is that, even though it is a low-level computer systems course, they still apply a lot of abstraction to the concepts taught. There is no exposure to Verilog or FPGAs, which could have been leveraged to learn how to build a computer system, and we are taught an educational ISA called SM213 instead of something commonly used in industry (like x86 or ARM). Overall, the course material was not impactful in my other courses this year, but I believe it is very useful and will come up again in future courses relating to computer systems.

- **Utility**: 3/5
- **Interest**: 4/5
- **Difficulty**: 5/5

## CPSC 221 - Basic Algorithms and Data Structures

This course is an introduction to algorithms and data structures. The course structure consisted of six assignments, weekly labs, weekly examlets (similar to a quiz), and a final exam.

We covered a lot of the essential algorithms and data structures you would see in a LeetCode preparation course (like Neetcode 150), including arrays, linked lists, stacks, queues, trees, graphs, big-O notation, and proving correctness. Earlier, in my CPSC 121 review, I mentioned that the proof methods taught in that course would come in handy here. You will often have to prove the correctness of an algorithm. The proofs are never that hard, but they can be tricky if you have not read many proofs. Personally, since I had a fair amount of experience with LeetCode before taking this course, a lot of the topics felt easy to understand. This course felt useful mainly for maintaining my readiness for technical interviews, but I have not really seen much use for it in everyday programming. On the odd occasion I may spot some inefficiencies in my code that a better algorithm would fix. Ultimately, if you are doing any sorting or searching, you tend to rely on already-optimized libraries to do it for you. I do not think this course is directly useful for building software, but on the odd occasion it provides the tools and knowledge to spot and fix an inefficiency you find while programming.

- **Utility**: 3/5
- **Interest**: 3/5
- **Difficulty**: 3/5

## STAT 305 - Introduction to Statistical Inference

This course introduces statistical inference. For readers who don't know, "inference" means deriving a logical conclusion from evidence, so in this course we are taught how to draw conclusions from data using statistics. The course structure consisted of weekly labs, weekly assignments, three quizzes, and a final exam.

I will be honest, this course was difficult to get through. It's not that the material is hard, it was just dry and not well delivered. The first month of the course was a review of probability and an in-depth look at normal distributions. The second third covered maximum likelihood estimators, which I thought was neat as it is closely related to machine learning, and the last third covered Bayesian inference and hypothesis testing. Of all the material, maximum likelihood estimators were the most interesting to me. The material does not feel very applicable to my other courses, and it could do with some improvements to delivery to make it more interesting. I do not see much utility in this course for work or other courses, other than providing some background knowledge for the statistical tests you would perform.

- **Utility**: 1/5
- **Interest**: 1/5
- **Difficulty**: 3/5