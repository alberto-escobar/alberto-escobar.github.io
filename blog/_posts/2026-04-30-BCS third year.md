---
title: "Review of my third year in BCS"
slug: review-of-third-year-in-bcs
---

I completed my third and final year of BCS and wanted to provide a review of the courses I took during 2025W1 and 2025W2. For each course I give scores based on the following aspects:

- **Utility**: How useful the course was for later courses or projects
- **Interest**: How interesting the course was
- **Difficulty**: How difficult the course was

## 2025W1

### CPSC 498 - Directed Studies in Computer Science

This course is essentially research for credit. The content varies wildly since it depends entirely on what you choose for your project, and the course components depend on the plan you and your supervising professor agree on for the semester.

A lot of colleagues asked me how I went about taking this course, and the process isn't very clear on the department's website, so here is how registration works:

1. Approach a professor and ask them to be your supervisor. Ideally you do this the semester before you want to take the course. I found my supervisor by cold email, but I think going in and talking with them in person is better, since it lets both of you gauge the vibe.
2. If they agree, discuss what kind of project or research you would like to do. The best approach is to come in with a couple of topics you are interested in, but stay open to whatever project they suggest. You should also agree on your deliverables and how often you will meet.
3. Write a one-page proposal describing the nature of your project, its goals, and the contribution it makes. Have your supervisor review it to make sure you are on the same page. Once they approve it, submit it along with a registration form to the CPSC department, which will review your request and approve or deny it.
4. Start the project with your professor after submitting the proposal. You should be registered for the course at some point before the add/drop date.

My project investigated the communication overheads between microservices. I had weekly meetings with my professor where I presented the work I had done the previous week, and we discussed what I would do next. My main deliverable was a research report summarizing my findings.

I had the pleasure of being supervised by Reto Achermann and his colleague Michael Giardino from Huawei. The project was very interesting because it touched on a lot of systems concepts I enjoyed deep diving into, and it positioned me to learn a lot about microservice architectures, Docker, networking, and computer systems in general. There were plenty of moments where I was frustrated with running experiments and stuck on how to move forward, but I think those moments are important to experience in university, because you need the same skills to innovate at a company. Being able to carry out experiments and produce results that are useful to others is an important skill set to have. The one thing I would do differently is commit to the project for longer. One semester doesn't really produce anything substantial, and if you want to publish in a journal or conference, two semesters of research is a much better target.

If you are interested in my work, my research report is <a href="{{ site.baseurl }}{% link /blog/assets/documents/CPSC 488 Research Report.pdf %}" target="_blank">
  **here**
</a>.

It is hard to score this course on utility, interest, and difficulty, since it really depends on the professor and the project you choose.

- **Utility**: *it depends*/5
- **Interest**: *it depends*/5
- **Difficulty**: *it depends*/5

### CPSC 416 - Distributed Systems

This is a fourth-year course that gives a solid grounding in distributed systems. It covers MapReduce, consistency models, consensus, logical time, distributed coordination, and distributed hashing, and finishes with more specific topics like cryptocurrency. The course was comprised of three lab assignments, two quizzes, and a final exam.

The topics taught in this course are valuable to know in industry. Throughout the semester I went to various employer events and was able to talk with software engineers about their companies' systems because of what I learned here. I found the material interesting, but a lot of the credit goes to Arpan Gujarati. He is an excellent professor who made every lecture engaging, regularly asking us to explain our thinking and shaping our understanding of the concepts as we went. If you have the opportunity to take it with him, I recommend it!

The difficulty is up there. The course builds on knowledge from your other systems courses, and you need to really understand how it all connects together. Personally, I think this course is a must-take if you plan to work at a company that deals with computer systems after you graduate.

- **Utility**: 5/5
- **Interest**: 4/5
- **Difficulty**: 4/5

### CHIN 131 - Basic Chinese I: Part 1

This will be a quick review. I took a language course because I had never taken one at the university level before. Overall it was pretty fun, and I found that learning a language so different from English (or the Romance languages in general) was a great way to exercise my brain. My Chinese speaking improved substantially compared to the work I had done on apps. The course covered eight lessons' worth of material (each lesson took about two weeks), with two to three quizzes per lesson covering listening, writing, and reading. On top of that there was one midterm project done with a partner and one final project done individually. I have a post on my blog about my <a href="{{ site.baseurl }}{% link /blog/2025/12/11/chin-131-final-project.html %}" target="_blank">**final project**</a>.

The course was especially tough for a first-year course because of the volume of homework you have to complete week to week, so don't expect it to be an easy elective.

- **Utility**: 我说一点中文。
- **Interest**: 中文很有意思。
- **Difficulty**: 中文很难。

## 2025W2

### CPSC 536G - Real Time System Design

This is a grad-level course on real-time systems, and it was really interesting to take. It covered periodic and aperiodic task scheduling, including Rate Monotonic (RM), Earliest Deadline First (EDF), and Response Time Analysis (RTA), as well as resource sharing policies, dynamic priority servers, and multiprocessor real-time scheduling, then moved into lectures where students presented a paper each class. The course was comprised of three take-home assignments, in-class participation, a paper presentation, and a research or hardware project.

This was my first time taking a grad-level course, and it was hard to adjust to the lectures at first because you had to be quick to understand the math notation used in class. I got used to it after a couple of lectures and was able to follow along. The course was taught by Arpan Gujarati, who did a great job teaching the fundamentals at the start of the semester and gave students a lot of support during the second half when we moved into paper presentations. For me, the presentations were the most interesting part of the course. I did mine on Earliest Eligible Virtual Deadline First (EEVDF), and it was really interesting to deep dive into the impact this scheduling algorithm had on the Linux community once its implementation was merged into the mainline Linux kernel. I also got to build a cool <a href="https://github.com/alberto-escobar/EEVDFVisualizer" target="_blank">**visualizer for EEVDF**</a> along the way.

For the course project, I went with the hardware project. The task was to implement uniprocessor EDF, the Stack Resource Policy (SRP), the Constant Bandwidth Server (CBS), and multiprocessor support for EDF on FreeRTOS, then test the implementation on an RP2040 dev board (Raspberry Pi Pico). This project was HARD. I spent a lot of time attending office hours, coding, vibe coding, yelling at Claude Code over text when it didn't do what I asked, debugging with a logic analyzer, and debugging toolchain setups on my Linux machine. The course lets you do this project with a partner, and you will need one, because there is no way someone can complete all the tasks on their own. This was single-handedly the hardest project I have ever completed, but it brought back my joy for low-level programming.

Utility depends on whether you are someone who will do this type of work. I don't think I will use it in my day-to-day work, but I enjoy it, and it's a card I keep in my back pocket if I ever think about changing gears in the type of work I do.

- **Utility**: *it depends*/5
- **Interest**: 5/5
- **Difficulty**: 6/5

### FNH 330 - Introduction to Wine Science I

This course is a known meme at UBC, dubbed "the wine drinking course." I took it because I genuinely wanted something that entertained an area of interest unrelated to computation or Mandarin. The course was comprised of three quizzes, two midterms, a final exam, and labs. The course covers various concepts in wine science, ranging from history, nutrition, grape cultivation, and winemaking processes to the major wine regions of Europe, Canada, and the US. It also teaches you how to properly taste wine in weekly labs. Unfortunately, we couldn't actually drink the wine. We could only taste and spit, and swallowing would lead to mark deductions.

This course isn't particularly useful beyond being a fun fact I can bring up in the occasional social situation. That said, it was very interesting to learn about wine in such depth, and I came out with a deep appreciation for it and the ability to pick out a good bottle at the liquor store. The course wasn't difficult, but it was very dense with material, and I had to spend a good chunk of time reviewing before each exam.

- **Utility**: 🍷/5
- **Interest**: 🍷/5
- **Difficulty**: 🍷/5

### CHIN 133 - Basic Chinese I: Part 2

This is the second half of the CHIN 131 course I took the semester before, so this will be another quick review. The course was a noticeable step up in difficulty, since the expectations for reading, writing, listening, and speaking are all much higher. You are expected to recognize more characters, follow faster conversations, and hold longer ones yourself, so keeping up with the material every week matters even more than it did in CHIN 131.

The course covered six lessons, a midterm project, and a final project. I wrote a post about my <a href="{{ site.baseurl }}{% link /blog/2026/04/14/chin-133-final-project.html %}" target="_blank">**final project**</a> if you want to check it out.

After taking this course, I definitely felt my Mandarin improve significantly compared to the start of the school year before I took CHIN 131. It is rewarding to look back and realize I can now hold simple conversations that would have been impossible a few months earlier. Hopefully it comes in handy when I travel to China this summer.

- **Utility**: 我想在中国交一些中国朋友。
- **Interest**: 我觉得写汉字很有意思。
- **Difficulty**: 中文比上学期更难，我的头很疼。

## Final Thoughts

I ended this year with As in all my courses, but more importantly, I checked off a lot of goals I had set for myself. I did research, took a grad-level course, worked as a TA, led a team in a design club, participated in nwHacks at UBC, competed and won at TreeHacks at Stanford, and wrapped up my degree with a full-time offer and a good three months of summer plans ahead of me.

I intentionally took a lighter course load this year, and it made a big difference. The year was still incredibly busy, but this time I wasn't just grinding out schoolwork. I was spending my time on work that felt more fulfilling and rewarding, and the extracurriculars helped me build skills that I know will carry forward into my career. Looking back at how burnt out I was after second year, this was a much healthier way to spend my time, and I would recommend finding that balance earlier than I did.

My final note on the UBC BCS prgram is that I think this program is really something special. It offers all the benefits of a university degree without forcing you into a long period of being a student. I have no regrets about quitting my previous career to pursue it. The experiences I gained here are invaluable, and they propelled me headfirst into the career I really should have been pursuing the whole time.

If you made it to the end of my review series, thank you for reading! Please feel free to reach out to me on <a href="https://www.linkedin.com/in/alberto-e/" target="_blank">**LinkedIn**</a> or by email at albertescobar AT live DOT com.