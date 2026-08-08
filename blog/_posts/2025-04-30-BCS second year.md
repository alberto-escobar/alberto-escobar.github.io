---
title: "Review of my second year in BCS"
slug: review-of-second-year-in-bcs
---

# Review of my second year in BCS

I finished my second year of BCS and wanted to review the courses I took during 2024W1 and 2024W2. For each course I give a score on the following aspects:

- **Utility**: How useful the course was for later courses or projects
- **Interest**: How interesting the course was
- **Difficulty**: How difficult the course was

## 2024W1

### CPSC 304 - Introduction to Relational Databases

This is an introduction to relational databases, covering database design, schema refinement, normalization, formal query languages, SQL, data warehousing, and data mining. The course is graded on in-class exercises, a midterm, a final exam, and a major project.

I was taught by Rachel Pottinger, who honestly is one of the best professors you can have for this course. First, her research is in databases, and she is very open to undergrads joining her research reading group sessions. Second, she teaches with a lot of examples and articulates the material well. Third, she is kind and genuinely cares about her students. She periodically pauses in lecture to check whether people are following, and if they are lost she takes the time to re-explain the concept.

This course started out rough for me. I almost failed the first midterm, and that part was on me: I chose not to attend class regularly and didn't review my notes consistently. The struggle with this course is that I hadn't taken the time to learn the mindset you need for database design and schema refinement. A lot of it is abstract, and that can be hard to grasp, but it gets easier as the concepts and terminology being tossed around start to make sense. After being humbled by the midterm, I put in a lot of time to catch up and ended up scoring an A for the term. The takeaway is that you can't check out of this course. Attend lecture or review the notes regularly and make sure you understand what is happening.

The major project is building a novel app with a sophisticated database design in a group of 2-3 students. "Novel" here means you have to pitch your app idea to the TAs to confirm it isn't on (or too similar to something on) the blacklist they keep. That limitation really got the creativity going, since we had to think about a problem we ran into in everyday life and build something to address it. Our group built a recipe sharing application that let users create and share recipes with friends and schedule recipes and cooks for home cooking. The project isn't too difficult if you already know how to connect a database to a backend and have that backend talk to a frontend.

I think this course is very interesting because it makes you re-examine how you would efficiently and properly store data in a database. I went back through past projects of mine and realized what a mess my databases were and how I would redesign them now. The project can be fun and is a good thing to throw on your resume. The usefulness of this course is high, since software systems and data systems lean on relational databases heavily, so knowing how to design and build one for a given situation is very valuable.

- **Utility**: 5/5
- **Interest**: 4/5
- **Difficulty**: 3/5

### CPSC 313 - Computer Hardware and Operating Systems

This course is like CPSC 213, except you actually learn useful concepts about how you get from hardware to operating systems. It covers how CPUs implement and execute instructions, caches and memory systems, disks and file systems, virtual memory, operating systems, and virtual machines. The components are class exercises (things you do before, during, and after lecture), weekly take-home labs, biweekly quizzes, and a final exam.

This course was dense. Extremely dense. But it was also very interesting, and I learned a great deal about computer systems through the constant grind of studying regularly. I also picked up quite a bit about x86 through the educational ISA they introduce, cunningly named y86. The course is hard, but the lectures and class exercises are essentially repetitions of the same topic in different mediums to help you absorb it. I think the professors did an excellent job using Margo Seltzer's videos to introduce the material as pre-class exercises. Here is a link to the videos if you are interested: [CPSC 313 Videos](https://www.youtube.com/playlist?list=PL5U42w7ah5Jx9iD73Cgd8dXc4mF8a2Uek)

One exercise I really enjoyed was when they put C code and assembly side by side to show how *very readable* C gets converted into much less readable assembly, and how you can reconstruct the C if you work through the assembly (after several headaches, of course).

Like I mentioned, if you have an interest in systems, this material will be interesting and relevant in higher level courses and in your career. But if you are more of a data person or a design person, this course is more of a hurdle than a foundation.

- **Utility**: 4/5
- **Interest**: 5/5
- **Difficulty**: 5/5

### CPSC 317 - Introduction to Computer Networking

This is a thorough introduction to computer networking. The course essentially walked me through each layer of the OSI stack in depth. The course was comprised of five assignments (of varying difficulty), four quizzes, class participation through iClicker, and a final exam.

Overall the course was fairly standard. I found the material interesting, but a bit dry at times. At some point in the semester it all clicked and I really understood how the OSI model works. The trick was to regularly go back to earlier material and figure out how it connected to whatever was being taught now. Most of the assignments are straightforward, but one of them was brutal: implementing TCP in C. That one was very difficult and took a lot of collaboration. Personally, I think that if you are a systems oriented person, being knowledgable about networks is essential for day to day work.

I can confidently say that after taking this course, troubleshooting the network problems in my own projects got much easier because I could actually comprehend what was happening. This material would also be useful to know for later systems or cybersecurity courses.

- **Utility**: 4/5
- **Interest**: 3/5
- **Difficulty**: 3/5

### CPSC 340 - Machine Learning and Data Mining

This is a very good fundamentals course on machine learning. It begins with data exploration, then dives into various classifier models, clustering models, regression, PCA, and feature engineering, and ends on neural networks and deep learning. The structure was very standard: six assignments, a midterm, a final, and an optional research project (which I recommend trying, since it's a good way to expand your knowledge of the topic).

That semester I had the immense pleasure of being taught by Jeff Clune and Cong Lu. Both are prominent researchers in AI and excellent lecturers. They took the time to explain concepts, check in with the class on understanding, and work through more examples whenever something wasn't landing with the class. Office hours were also great, they have a wealth of information to share about the field and could talk for hours about it.

It was also a dense course. It tested my knowledge of linear algebra, probability, and statistics, and it covered a lot of ground, and each topic went into depth but still only scratched the surface of an iceberg of information I could explore. It was hard, and I spent a lot of time studying and working on assignments, but it is one of my favourite courses I've taken at UBC. I also opted to do the optional research project, which I have no regrets about. The project was writing a literature review on a machine learning topic. We got a good grade on ours, and I've posted it here if you are interested in reading it: <a href="{{ site.baseurl }}{% link /blog/assets/documents/CPSC 540 Project.pdf %}" target="_blank">
  **project paper**
</a>

This course is the least applicable to me, since I am more of a systems person than a data science person, but it was very informative and expanded my understanding of machine learning. With AI everywhere now and machine learning models being used to make data driven decisions in systems, learning these topics is very useful and helped me catch up to a rapidly accelerating and mysterious field. Along with the material, taking it with Jeff Clune and Cong Lu really made it one of my favourite courses at UBC.

- **Utility**: 4/5
- **Interest**: 6/5
- **Difficulty**: 4/5

## 2024W2

### CPSC 310 - Introduction to Software Engineering

This course covers several topics in software engineering: the software life cycle, testing, design patterns, software requirements, and more. It captures a lot of the core knowledge you would pick up working as a software developer at a tech company. The course was comprised of four quizzes, a final exam, a group project, and self-reflection assignments completed during the development of the project.
 
This course is not hard. A lot of the material is easy to digest if you have worked as a software development intern before taking it. If you haven't interned as a developer, a lot of this will be fresh, so pay attention and actually learn it, because it will come up in the workplace. The quizzes and final generally only needed a review of the slides a couple of nights beforehand. The project isn't difficult either if you have built web apps in the past. The hardest part is finding someone you can collaborate with effectively. This was a course I did not put much effort into studying for, since I didn't find it too interesting. The value here is less about difficulty and more about learning the fundamental topics that developers argue about in the workplace.
 
- **Utility**: 2/5
- **Interest**: 1/5
- **Difficulty**: 1/5

### CPSC 320 - Intermediate Algorithm Design and Analysis

This course covers various topics in algorithms: reductions, divide and conquer, greedy algorithms, dynamic programming, and NP-completeness. It was comprised of five assignments, a midterm, a final exam, and some participation exercises.

This course was a grind. It involved a lot of reading, drawing out examples, and explaining my thought process to my classmates. The grind was enjoyable, and I got a lot of joy out of discussing different ways to solve a problem with the people around me. The best way to study for this course is to look at how the professor works through a problem in lecture, then close the notes and walk yourself through the same problem on your own. I started off not enjoying the course, since it was proof heavy and proofs hadn't been my strength ever since CPSC 121. That actually changed here. The assignments force you to be exact in your writing and your explanations, and after five of them my proof writing was noticeably better than when I walked in.

The course didn't give me a direct technical advantage, but I think it improved my ability to walk through and solve the problems you get in technical interviews, which matters because that is a common way software developers get hired.

- **Utility**: 2/5
- **Interest**: 5/5
- **Difficulty**: 5/5

### CPSC 425 - Computer Vision

This course covers the fundamentals of computer vision. Topics range from image formation and filtering through feature detection, multi-image geometry, and finally neural networks. It was comprised of bi-weekly quizzes and assignments, a midterm, and a final exam.

To be upfront, this is not a course that will hand you useful skills unless you end up working in computer vision. I never applied much of it directly, and I took it out of interest carried over from earlier projects like my melanoma detection work. A friend of mine who took this course as well went on to a computer vision co-op and still finds the material applicable to his day-to-day work.

That said, it was one of the more interesting courses I have taken. It starts at the fundamentals with how light, lenses, and cameras actually work, then builds up through the classical vision toolkit. The first three quarters are well-established techniques that are still widely used, and the last quarter moves into neural networks and how they get applied to vision problems. The assignments do a good job of turning the lecture material into something hands-on, but only if you actually write and read the code yourself. Dumping the assignment into ChatGPT and asking it to finish will teach you nothing. The workload is not overwhelming and reviewing for the quizzes is straightforward, but you do need a solid grasp of linear algebra. I found myself reaching back for it on the harder assignment questions and again partway through the final. The material got dry in stretches, but I walked away with a real appreciation for the field and a few project ideas I still want to build. 

- **Utility**: 2/5
- **Interest**: 4/5
- **Difficulty**: 3/5

### CPSC 436S - Computer Security

This course covers computer security from the perspective of both the attacker and the defender. Topics span authentication and access control, cryptography, system and network security, software security (reverse engineering, vulnerabilities, binary exploitation), and blockchain security. It was comprised of in-class activities, a midterm, a final exam, and ten [CTF](https://en.wikipedia.org/wiki/Capture_the_flag_(cybersecurity))-style assignments.

This is one of the best courses I have taken in my time at university. The material is immediately powerful and useful in the field. Anything you build needs to be secure, and in an era where AI is writing a growing share of our code, there will be no shortage of vulnerabilities sitting in codebases. This course gives you the knowledge and the hands-on experience to find them. The course also provides a lot of breadth too, since security touches nearly every layer of a computer system, and the course covers enough of them that you come out with good instincts.

I am a systems-oriented person, and this course was captivating. I would regularly put off other homework or forget about chores entirely while working through the assignments, because the challenges were that interesting to sit with. The lecture material is genuinely interesting on its own, and you need it; the assignments are not solvable without actually understanding what was taught.

The difficulty is high. You need the patience to slow down, understand the material properly, and work out how to approach a problem before you start attacking it. Some exam questions were essentially CTF challenges you had to solve on the spot, and doing that under time pressure is stressful in a way few other courses replicate.

Lastly, the professor. I had the honor of being taught by Robert Xiao, a renowned CTF competitor who has taken first place at DEF CON CTF multiple times. Genuinely one of the best professors I have had, and showing up to his class was a complete joy.

If you have the opportunity to take this course, take it.

- **Utility**: 5/5
- **Interest**: 6/5
- **Difficulty**: 5/5

## Final thoughts

Looking back, I ended the year with straight As, but it cost me. This was an immensely heavy year and I was busy nearly every day, and there were points where I hit my absolute limit. I would not recommend taking all of these courses in one year the way I did. If you can spread them into the summer, do it. The real cost wasn't the grades, it was that I had no capacity left to properly job search or prepare for internship interviews, which is arguably the more important thing to be doing at this stage.