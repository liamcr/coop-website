import React from "react";

export const reports = {
  TheCooperators: {
    company: "The Co-operators",
    term: "Summer 2019",
    color: "#1E8CCB",
    sections: [
      {
        id: "abstract",
        title: "Abstract",
        paragraphs: [
          <p>
            In this report I will identify what I took away from this past work
            term. I will recount how I took the last four months as an
            opportunity to enhance my technical skills, as well as improve my
            ability to effectively work in a group setting.
          </p>,
        ],
      },
      {
        id: "aboutTheCompany",
        title: "About the Company",
        paragraphs: [
          <p>
            Over the summer, I worked at The Co-operators in downtown Guelph. I
            worked with the automotive insurance team performing maintenance on
            PolicyCenter (A software used by agents to quote clients on their
            insurance policies). My job focussed on developing in an
            object-oriented programming language called Gosu. This language was
            developed by Guidewire (The company that developed the base version
            of PolicyCenter), and was heavily influenced by Java.
          </p>,
          <p>
            As a company, a lot of the cutting-edge development being done
            relies on the sheer amount of data the company has access to. For
            example, one of the major projects being developed is the ability to
            assess a building’s risk of flooding or water damage down to the
            accuracy of an individual building. This is something no other
            insurance company in Canada has done (All risk evaluations for water
            are typically done at a postal code level of accuracy). The
            Co-operators are able to do this due to the data available to them.
          </p>,
          <p>
            An interesting fact about the Co-operators is that the company is a
            co-operative rather than a corporation. This means that it is a
            business owned by the people using its services. Rather than make
            all business decisions based solely on potential profit and revenue,
            the wants and needs of the users also come into the equation due to
            the fact that the Co-operators Group is owned by them.
          </p>,
        ],
      },
      {
        id: "goalsLearningObjectives",
        title: "Goals/Learning Objectives",
        paragraphs: [
          <p>
            First and foremost, what were my learning goals? Did I achieve them?
          </p>,
          <h5>
            I would like to improve my oral communication skills by
            contributing/presenting something of significance to a meeting,
            which will allow me to further understand and be more engaged in the
            development of projects.
          </h5>,
          <p>
            I presented my projects and progress in daily scrum meetings, as
            well as gave a few demos to a handful of people, but I never
            formally presented any feature in a significant meeting, such as the
            monthly team meetings. This was a doable goal, but I simply did not
            make enough of an effort to make it happen. It is surely something I
            will try to do in my future terms.
          </p>,
          <h5>
            I would like to improve my problem-solving skills by learning how to
            efficiently understand and fix a complex issue on Jira.
          </h5>,
          <p>
            This one ended up being a relatively easy goal to achieve, and by
            the end of the term I could tackle most Jira issues from the ground
            up on my own.
          </p>,
          <h5>
            I would like to contribute a useful new feature to PolicyCenter (or
            any other software I may be helping in developing) from scratch.
          </h5>,
          <p>
            One of the new features I added to PolicyCenter was a page that
            allowed the user to search for drivers by their ID, and re-enrol
            them into the company’s En-Route service. This was used whenever an
            initial enrol request failed, and proved to be a very helpful
            addition to the software.
          </p>,
          <h5>
            I would like to improve my written communication skills by assisting
            in writing a professional document, such as documentation, or a
            testing plan document.
          </h5>,
          <p>
            Aside from commenting all of the code I wrote; I never did anything
            more in terms of documentation. It is still something I wish I had
            made the time to do, but with all of the other responsibilities of
            the job, it fell off of my radar a bit.
          </p>,
          <p>
            When coming up with my goals for the term, I tried to make sure they
            were related to my position. Resolving a complex issue on Jira and
            developing a new feature in PolicyCenter were very much related to
            my job responsibilities, as I was working with both Jira and
            PolicyCenter on a daily basis. Contributing something in a meeting,
            as well as writing documentation, are both tasks that were not
            necessary for an employee in my position, but are nonetheless very
            much related to my work.
          </p>,
          <p>
            In terms of technical skills, I wanted to improve on both my ability
            to use object-oriented programming effectively, and my ability to
            write efficient SQL queries. These are both skills I have had
            experience with in the past, but I feel these are very important
            skills to know how to use effectively, and I made an effort to
            understand and learn new ways to write code and queries.
          </p>,
          <p>
            In terms of soft skills, I wanted to learn how to be a more
            effective communicator and team member. Teamwork is arguably the
            most important skill when it comes to succeeding in the workplace,
            so I believe the improvement I saw in myself over the last 4 months
            will be very crucial when it comes to performance in future
            positions.
          </p>,
          <p>
            The two specific technologies I wanted to work with were Jira and
            Git. Jira is a very effective and prevalent technology when it comes
            to managing tasks and issues in a team environment. I will no doubt
            be using this technology in the future, so I wanted to get a head
            start and become familiar with it early. Git is the most common
            version-control system out there, and will be used at most places I
            work in the future. It’s an important tool to know how to use in a
            team setting as well as in an individual setting, so it will be no
            doubt helpful to learn.
          </p>,
        ],
      },
      {
        id: "jobDescription",
        title: "Job Description",
        paragraphs: [
          <p>
            I worked as a Junior Systems Developer on the PolicyCenter
            maintenance team. My job was to take user-submitted Jira issues,
            identify the root cause, and go through the formal process of fixing
            any defects within the code. Root-cause analysis was one of the more
            interesting parts of the job, as it was sort of like a puzzle to try
            and find the logic error in the large code base.
          </p>,
          <p>
            The work environment was very agile. It was very open-concept so
            that everyone could easily communicate with one another, and every
            afternoon at 1:15 we had our daily scrum meeting where each person
            updated the team on what they have been working on, what they are
            currently working on, and what they will be working on until the
            next meeting.
          </p>,
          <p>
            In order to succeed in this position, I needed teamwork skills, as
            well as skills in object-oriented programming and SQL. Teamwork was
            something I learned more about on the job than I had in school. I
            believe this is because I was working with experienced full-time
            employees that knew how to create an effective team environment.
            Object-oriented programming and SQL, however, were both skills that
            I learned more about in school, but working with them on a daily
            basis really helped me refine those skills even more. For example, a
            SQL join is a concept that I knew of from class, but I really needed
            to think hard about them in order to use them correctly. After using
            them every day, they have become very intuitive and easy to
            understand.
          </p>,
        ],
      },
      {
        id: "conclusion",
        title: "Conclusion",
        paragraphs: [
          <p>
            Ultimately, this work term was a great learning experience for me.
            It was the first time I had really worked with a team on a project
            for so long, and it helped me improve my soft skills immensely. I
            had the freedom to refine and fine-tune my technical skills where I
            felt necessary, and my superiors helped me to achieve all of the
            goals that I wanted to. I did not realize all of my learning
            outcomes for the term, and I definitely have room to improve, but at
            the end of the day, the first work term is all about understanding
            how to work in a team environment and identifying where I can
            improve. I learned a lot over the past 4 months, and I am looking
            forward to using this knowledge to further improve in my future work
            terms.
          </p>,
        ],
      },
      {
        id: "acknowledgments",
        title: "Acknowledgments",
        paragraphs: [
          <p>
            I would like to thank my co-workers for making these past four
            months so enjoyable. In particular, I want to thank my supervisor,
            Harvinder Sandhu, and my team: Barbie, Francisco, Rick, Victor,
            Sebastian, Anthony, and James. I also very much appreciate the work
            that Laura Gatto and Kate McRoberts put in to helping me find a
            place of employment for the term.
          </p>,
        ],
      },
    ],
  },
  WSIB: {
    company: "WSIB Innovation Lab",
    term: "Fall 2019",
    color: "#123054",
    sections: [
      {
        id: "abstract",
        title: "Abstract",
        paragraphs: [
          <p>
            In this report, I will identify what I took away from this past work
            term. I will recount how I took the last four months as an
            opportunity to further my technical development, as well as improve
            my ability to effectively work in a group setting.
          </p>,
        ],
      },
      {
        id: "aboutTheCompany",
        title: "About the Company",
        paragraphs: [
          <p>
            Over the 2019 fall co-op term, I worked at the WSIB Innovation Lab
            in downtown Kitchener. The WSIB (Workplace Safety and Insurance
            Board) is Ontario’s governing worker’s compensation board. The lab
            is interesting in that, rather than being heavily intertwined within
            the WSIB, it acts as its own separate entity. This allows the lab to
            experiment with different cutting-edge technologies without
            interfering with the current workflows of the company as a whole. My
            job focussed primarily on developing with React and JavaScript.
          </p>,
          <p>
            One of the main purposes of the lab is to help improve the processes
            within the WSIB. For example, the Board receives many complaints
            regarding the process of how noise-induced hearing loss (NIHL)
            claims are handled. It can take upwards of one year for an employee
            to acquire the hearing aid they need. As a result, the lab was
            tasked with improving the NIHL workflow. Using technologies such as
            React, Docker, and Kubernetes, the lab developed a website to guide
            an injured worker through the process of setting up an NIHL claim,
            including a calculator to determine what their claim is worth.
          </p>,
        ],
      },
      {
        id: "goalsLearningObjectives",
        title: "Goals/Learning Objectives",
        paragraphs: [
          <p>
            First and foremost, what were my learning goals? Did I achieve them?
          </p>,
          <h5>
            By the end of my term, I want to have developed a complete mobile
            application.
          </h5>,
          <p>
            I believe developing a complete mobile application was an ambitious
            goal, as there will always be improvements I would want to add to
            the app. However, I began development of an application from
            scratch, and brought it to a place that I am content with. The
            application included concepts such as machine learning, and
            object-oriented programming in Swift.
          </p>,
          <h5>
            By the end of the term, I want to have implemented machine learning
            concepts in some way.
          </h5>,
          <p>
            I was able to successfully implement a machine learning model into
            my aforementioned mobile application. The idea for the model was to
            take raw accelerometer data from a worker, and determine whether or
            not the user is fatigued. The model was trained on data provided
            from a study conducted by the University of Waterloo, and was fit
            using a support vector machine.
          </p>,
          <h5>
            By the end of the term, I want to have contributed to a project that
            actually gets used externally from the lab.
          </h5>,
          <p>
            Unfortunately, this is a goal I was not able to achieve.
            Technically, I contributed to the lab’s website, which is used by
            external users to the WSIB, but that is not what I had intended when
            writing this goal. It’s true what they say, “The first 90 percent of
            the code accounts for the first 90 percent of the development time.
            The remaining 10 percent of the code accounts for the other 90
            percent of the development time.” I was able to successfully create
            an application with a solid core functionality, but it was the last
            10 percent – the fine tuning, bug fixes, and design changes, that
            prevented the application from moving past the concept stage.
          </p>,
          <h5>
            By the end of the term, I want to be comfortable sharing my opinions
            at team meetings.
          </h5>,
          <p>
            I did notice myself become more comfortable in a meeting setting by
            the end of the term. Because of the exposure I had to frequent team
            meetings and demos, I was able to become comfortable contributing
            ideas to my team members.
          </p>,
          <p>
            When coming up with my goals for the term, I tried to make sure they
            were related to my position. Mobile development and machine learning
            are two things that, although not required for my position, were
            very applicable to the projects that I was working on. Feeling
            comfortable in meetings was very much related to the
            responsibilities included in my position, as I attended meetings on
            a daily basis.
          </p>,
          <p>
            In terms of technical skills, I wanted to make an effort to take in
            as many new technologies as I could. Mobile development with Swift,
            machine learning, AWS, Docker, and Kubernetes are all examples of
            technologies and concepts that, although I had no prior experience
            with them, I became familiar with. I also wanted to improve and
            refine my skills with familiar technologies such as Jira and Git,
            both of which I used on a daily basis.
          </p>,
          <p>
            In terms of soft skills, I wanted to learn how to be a more
            effective communicator and team member. Teamwork is arguably the
            most important skill when it comes to succeeding in the workplace,
            so I believe the improvement I saw in myself over the last 4 months
            will be very crucial when it comes to performance in future
            positions.
          </p>,
          <p>
            The one concept that I really wanted to get out of this position was
            experience with machine learning. It seems to be the direction the
            world is going in terms of advanced technology, and I wanted to make
            sure I understood it, as well as apply it.
          </p>,
        ],
      },
      {
        id: "jobDescription",
        title: "Job Description",
        paragraphs: [
          <p>
            I worked as a Full-Stack Developer at the Innovation Lab. My job was
            to not only help in developing the lab’s website, but also do
            research and development on technologies that could improve the
            WSIB’s workflows.
          </p>,
          <p>
            The project I primarily worked on throughout the term was a fatigue
            analysis application. A significant number of worker’s compensation
            claims come from masonry workers who became injured on the job. The
            injuries are often caused because the worker had to work through
            fatigue when they should have been taking a break. The fatigue
            analysis application uses motion sensors attached to the user’s body
            to track their movements, and uses a machine learning model to
            determine whether or not the worker is fatigued. When it is
            determined that the user is fatigued, a push notification would be
            sent to the worker encouraging them to take a break. This would, in
            theory, reduce the number of fatigue-induced masonry injuries.
          </p>,
          <p>
            The work environment was very agile. We had eight co-op students
            gathered around a table together so that in the event that some
            requirements change, or a different problem arose, we could easily
            notify the relevant co-workers on the other teams. Every morning at
            9:30 we had our daily stand-up meeting where each person updated the
            team as to what they have been working on, what they are currently
            working on, and what they will be working on until the next meeting.
          </p>,
          <p>
            In order to succeed in this position, I needed technical programming
            skills, as well as skills in time-management, organization, and
            teamwork. Teamwork was something I learned more about on the job
            than I had in school. I believe this is because I had the
            opportunity to work on projects larger than a typical individual
            assignment. Time-management and organization skills were very
            important due to the entrepreneurial setting the workplace provided.
            I was the project manager for the fatigue analysis application, and
            without proper time management and organization skills, deadlines
            would not be met, and the project ultimately would not have been
            worked on as efficiently.
          </p>,
          <p>
            My technical programming skills, however, were skills that I learned
            more about in school, but working with them on a daily basis helped
            me refine those skills further. For example, an HTTP request is a
            concept I first learned about in the classroom, but implementing
            this in a work environment made the concept easier and more
            intuitive to understand.
          </p>,
        ],
      },
      {
        id: "conclusion",
        title: "Conclusion",
        paragraphs: [
          <p>
            Ultimately, this work term was a great learning experience for me.
            It was the first time I had really worked so closely with other
            teams on a large project, and it helped me improve my soft skills
            immensely. I had the freedom to refine and fine-tune my technical
            skills where I felt necessary, and my superiors helped me to achieve
            all of the goals that I set for myself. I did not realize all of my
            learning outcomes for the term, and I definitely have room to
            improve, but at the end of the day I was able to apply everything I
            initially wanted to, including different technical skills, and soft
            skills such as teamwork and project management. I learned a lot over
            the past 4 months, and I am looking forward to using this knowledge
            to further improve in my future work terms.
          </p>,
        ],
      },
      {
        id: "acknowledgments",
        title: "Acknowledgments",
        paragraphs: [
          <p>
            I would like to thank my co-workers for making these past four
            months so enjoyable. In particular, I want to thank my supervisor,
            Eric Gordon, and my team: A.J., Jeff, Seeam, Brennan, Christina,
            Julia, and Sabrina. I also very much appreciate the work that Laura
            Gatto and Kate McRoberts put in to helping me find a place of
            employment for the term.
          </p>,
        ],
      },
    ],
  },
  ApplyBoard: {
    company: "ApplyBoard",
    term: "Summer 2020",
    color: "#007bff",
    sections: [
      {
        id: "abstract",
        title: "Abstract",
        paragraphs: [
          <p>
            In this report, I will identify what I took away from this past work
            term. I will recount how I took the last four months as an
            opportunity to further my technical development, as well as improve
            my ability to effectively work in a group setting.
          </p>,
        ],
      },
      {
        id: "aboutTheCompany",
        title: "About the Company",
        paragraphs: [
          <p>
            Over the summer 2020 co-op term, I worked at ApplyBoard in downtown
            Kitchener. ApplyBoard is a start-up company whose mission is to
            “educate the world” by streamlining the process of international
            students applying to Canadian, American, and British schools. The
            product ApplyBoard provides is a website, so the area of computing
            science I was involved in was heavily focussed on web development.
          </p>,
          <p>
            One interesting fact about the company is that, on my second day of
            work, the CEO organized a company-wide meeting to announce that
            ApplyBoard had just hit “unicorn” status (a privately-held company
            valued at over $1 billion). This marked only the third time a
            Canadian company was given this status (following Coveo and Nuvei).
          </p>,
        ],
      },
      {
        id: "goalsLearningObjectives",
        title: "Goals/Learning Objectives",
        paragraphs: [
          <p>
            First and foremost, what were my learning goals? Did I achieve them?
          </p>,
          <h5>
            By the end of my term, I want to be confident and comfortable
            developing using Ruby on Rails
          </h5>,
          <p>
            After discussing my learning goals with my team lead, he told me
            that even after twenty years in the industry, he still occasionally
            comes across Rails concepts that he does not fully understand. That
            being said, although I didn’t get to a place where I understood
            everything about Ruby on Rails, I did reach a level of proficiency
            where I felt comfortable tracking down bugs and navigating the
            codebase for the most part. Given that was the end goal with this
            learning objective, I would call this a success.
          </p>,
          <h5>
            By the end of the term, I want to have helped contribute something
            of value to the ApplyBoard website
          </h5>,
          <p>
            While the term “something of value” is a bit vague and subjective, I
            defined it as a new feature to the site that most users would use
            and notice. In other words, I did not want to go through my term
            fixing small bugs here and there - I wanted to help develop
            something bigger.
          </p>,
          <p>
            The biggest addition to the website I was involved in was the
            acceptance of Duolingo English scores as a student’s English
            language proficiency (ELP) test. Due to COVID-19, students were
            having trouble accessing the more popular ELP tests, such as TOEFL
            or IELTS. As a result, Duolingo became a more popular and accessible
            alternative and, as a company, we had to account for this. Over the
            course of one month, my team and I implemented this from beginning
            to end. It remains a popular feature of the site.
          </p>,
          <h5>
            By the end of my term, I want to feel comfortable asking questions
            and sharing my opinions at team meetings
          </h5>,
          <p>
            This was another subjective goal; however, I did notice a difference
            in how I felt in meetings at the beginning of the term compared to
            the end of the term. By the end I never really found myself second
            guessing voicing my opinions, which ultimately was the end goal for
            this learning objective. I believe a big reason for this was because
            my team lead gave me the responsibility of leading the team
            stand-ups every morning. As a result, I became more comfortable
            speaking in meetings, especially after the realization that people
            tend to focus on the overall message of what is being said, rather
            than any minor stuttering or pauses (which were things I would
            previously obsess over).
          </p>,
          <p>
            When formulating my goals for the term, I tried to ensure they were
            related to my position. Proficiency in Ruby was a significant
            component of my role, so I wanted to make certain I was focussed on
            improving that skill. Feeling comfortable in meetings was also very
            much related to the responsibilities included in my position, as I
            attended meetings daily.
          </p>,
          <p>
            In terms of the technical skills I wanted to learn, I mainly
            focussed on increasing my aptitude in technologies that are involved
            in the workflow of a typical agile team; for example, Jira, Git, and
            GitHub.
          </p>,
          <p>
            In terms of soft skills, I wanted to become a more effective
            communicator and team member. Teamwork is arguably the most
            important skill when it comes to succeeding in the workplace, so I
            believe the improvement I saw in myself over the last 4 months will
            be very crucial when it comes to performance in future positions.
          </p>,
        ],
      },
      {
        id: "jobDescription",
        title: "Job Description",
        paragraphs: [
          <p>
            I worked as a Full-Stack developer at ApplyBoard. My job was to help
            in developing the company’s website, from bug fixes to implementing
            new features.
          </p>,
          <p>
            The most interesting aspect of my job, in my opinion, was the focus
            on Ruby on Rails backend development. It was a completely new
            technology for me, and the way the application was structured was
            vastly different than anything I had seen before in a full-stack
            project. Learning about how it handles routes, controllers, and
            models was a huge learning experience, given the only backend
            experience I had prior was express.js and SQL or MongoDB.
          </p>,
          <p>
            To succeed in this position, I required technical programming
            skills, as well as skills in time-management, organization, and
            teamwork. Teamwork was something I learned more about on the job
            than I had in school. I believe this is because I had the
            opportunity to work on projects larger than a typical individual
            assignment. Time-management and organization skills were also
            important due to the sprint-based nature of the work environment,
            with every task having a relatively close deadline.
          </p>,
          <p>
            My technical programming skills were skills that I learned more
            about in school; however, working with them daily helped me refine
            those skills further. For example, an HTTP request is a concept I
            first learned about in the classroom but implementing this in a work
            environment made the concept easier and more intuitive to
            understand.
          </p>,
        ],
      },
      {
        id: "conclusion",
        title: "Conclusion",
        paragraphs: [
          <p>
            Ultimately, this job was a great learning experience for me, more so
            in my soft skills than in my technical skills. This was the first
            work term I had in which the company properly implemented the agile
            development methodology (with ceremonies such as stand-ups, grooming
            meetings, and retrospectives), so I took a lot away from that which
            I can apply in future positions. I also learned a lot in terms of
            communication and teamwork because of the work-from-home situation.
            My team taught me what actions can be taken to foster relationships
            with teammates remotely, and I will take that with me to help in
            future work-from-home (or in-person) positions.
          </p>,
        ],
      },
      {
        id: "acknowledgments",
        title: "Acknowledgements",
        paragraphs: [
          <p>
            I would like to thank my co-workers for making these past four
            months so enjoyable. In particular, I want to thank my supervisor
            and my team (Team Knuth!). I also appreciate all the work that Laura
            Gatto and Kate McRoberts put in to help me secure my employment for
            the term.
          </p>,
        ],
      },
    ],
  },
};

export default reports;
