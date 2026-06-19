/**
 * Blog content (migrated from PHP pages/blog/*.php).
 * Each post body is hand-authored HTML rendered via dangerouslySetInnerHTML.
 */

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  modified: string;
  readingTime: string;
  excerpt: string;
  description: string;
  body: string;
};

export const posts: BlogPost[] = [
  {
    slug: "the-metric-trap",
    title: "The Metric Trap: Stop Counting, Start Living",
    date: "2026-03-22",
    modified: "2026-03-22",
    readingTime: "4 min read",
    excerpt: "On the quiet exhaustion of measuring everything, and the relief of letting some things simply matter without proof.",
    description: "Why I built a personal finance app that uses AI to handle the boring parts of tracking money.",
    body: `<p class="lead">
      Most people don't track their finances because it's boring. Opening a spreadsheet, typing in every coffee and grocery run, categorising each one manually — it's the kind of task that's easy to skip. And then skip again. Until you've skipped it for three months and have no idea where your money went.
    </p>
    
    <p>That's the problem FinFlow is trying to fix.</p>
    
    <p>FinFlow is a personal finance app I built to make tracking as effortless as possible. It uses AI to handle the tedious parts — so you spend less time entering data and more time actually understanding your money. It's designed with Indian users in mind, supporting INR, and works in Hindi, Bengali, and English. But honestly, the core idea applies to anyone who's ever given up on budgeting because it felt like too much work.</p>
    
    <p>The heart of the app is how you add transactions. There are four ways, and you can use whichever fits the moment.</p>
    
    <p>The first is manual entry — the classic approach. Fill in a form, pick a category, save it. Simple, familiar, nothing surprising. If you like being in control of every detail, this is for you.</p>
    
    <p>The second is text input. You type something like "spent 500 on lunch" or "paid 1200 for electricity" and the app reads it, pulls out the amount, figures out the category, and logs the transaction. No form filling. Just a quick line of text and you're done. It handles natural phrasing, so you don't need to write in any specific format — just write how you'd say it to a friend.</p>
    
    <p>The third is voice input. Speak in Hindi, Bengali, or English, and FinFlow transcribes what you said and categorises the expense automatically. This one's particularly useful when your hands are full or you just don't want to type. Say it out loud, move on.</p>
    
    <p>The fourth is receipt scanning. Take a photo of a receipt — from a restaurant, a store, wherever — and the app reads it. It pulls out the amount, the date, and what it was for, and creates the transaction for you. No typing at all.</p>
    
    <p>Once your transactions are in, the budgeting side kicks in. You set monthly limits for different categories — food, transport, entertainment, whatever matters to you — and the app shows you a progress bar for each one. It sounds simple, and it is. But seeing a bar slowly fill up across the month does something a number in a spreadsheet doesn't. It makes the limit feel real.</p>
    
    <p>The AI insights feature goes a step further. It looks at your actual spending data and surfaces observations specific to you. Not generic tips like "spend less on coffee." More like noticing that your food spending spikes every Friday, or that a particular category has been quietly growing for two months. It's not perfect — it's working with whatever data you've given it — but it's more useful than advice that could apply to anyone.</p>
    
    <p>At the end of each month, the app generates a summary report. Plain language, no jargon. What came in, what went out, which categories took the most, how it compares to the month before. It's meant to be the kind of summary you'd actually want to read, not a wall of charts that takes twenty minutes to interpret.</p>
    
    <p>One thing worth being upfront about: FinFlow is a prototype. It's in testing right now, not a finished commercial product. Things might break. Features are still being refined. I'm sharing it because I think the idea is genuinely useful — not because it's ready to compete with established apps.</p>
    
    <p>I built it because I kept running into the same problem myself. I'd try to track spending, give up after a week, lose track for months, feel vaguely anxious about money, repeat. The tools that existed either asked too much effort upfront or gave back too little in return. FinFlow is my attempt at something in between — something that lowers the friction enough that actually using it becomes the easier option.</p>
    
    <p>Whether it gets there is still being figured out.</p>`,
  },
  {
    slug: "the-human-element-in-an-ai-world",
    title: "The Human Element in an AI World",
    date: "2026-02-23",
    modified: "2026-02-23",
    readingTime: "3 min read",
    excerpt: "A reflection on what remains stubbornly human when the machines get faster, smarter, and louder.",
    description: "Artificial intelligence explained humanistically. A simple, honest take on what AI actually is and what it means for us.",
    body: `<p class="lead">
      I noticed something strange the other day. I was talking to a chatbot about feeling stuck with a project, and it responded with something that actually helped. Not because it understood me, but because it organized my own thoughts back to me in a way I could finally see clearly.
    </p>
    
    <p>That is the thing about artificial intelligence that nobody really explains well. We hear about it taking jobs or becoming sentient or changing everything forever. But when you actually use it, it feels much smaller and much more ordinary. It is a tool that predicts what words should come next. That is it. Nothing more magical than a very sophisticated autocomplete.</p>
    
    <p>But here is what makes it interesting. This simple mechanism of predicting the next word, when trained on enough human writing, starts to mirror something that looks like understanding. It can answer questions. It can write stories. It can help you debug code or draft an email or think through a problem. Not because it knows anything, but because it has seen enough patterns to guess what a helpful response looks like.</p>
    
    <p>I think that distinction matters. When we talk about AI like it is a thinking thing, we get scared or we get too excited. Both reactions miss the point. It is not thinking. It is not conscious. It is a mirror made of statistics, reflecting back the collective knowledge of everything humans have written online. Sometimes that reflection is useful. Sometimes it is wrong. Often it is both at the same time.</p>
    
    <p>The honest way to use AI is to treat it like a very fast, very confident intern who has read everything but understood nothing. It can help you organize your thoughts. It can give you starting points when you are staring at a blank page. It can explain concepts in different ways until something clicks. But you still have to think. You still have to decide what is true and what matters.</p>
    
    <p>I use AI almost every day now. Not because it replaces my thinking, but because it speeds up the boring parts. I ask it to explain error messages. I use it to outline ideas when my brain feels foggy. I treat it like a conversation partner that helps me hear myself more clearly. It is useful in the same way a calculator is useful. It handles the mechanical stuff so I can focus on what actually requires judgment.</p>
    
    <p>There is something oddly human about this tool. It was built by copying how we communicate. It works by predicting what we would say. In a weird way, using it feels like talking to a version of humanity that has been compressed into patterns. That does not make it alive. But it does make it strangely familiar.</p>
    
    <p>I do not know where all of this is going. Nobody really does. The people building these systems are figuring it out as they go, just like the rest of us. I think the best approach is to stay curious without getting carried away. Use the tools that help. Ignore the hype that distracts. Remember that technology has always been about extending what humans can do, not replacing what makes us human.</p>
    
    <p>Sometimes I wonder if future generations will look back at this moment the way we look at the early internet. A time when everything felt new and slightly confusing and full of possibility. I hope we build something good with it. I hope we remember that the point of any tool is to help people live better lives. That is what I think about when I think about AI.</p>`,
  },
  {
    slug: "the-urge-to-build",
    title: "The Urge to Build",
    date: "2025-12-15",
    modified: "2025-12-15",
    readingTime: "4 min read",
    excerpt: "On moving from spectator to maker, and the particular loneliness of a creativity that refuses to stay quiet.",
    description: "On curiosity, starting small, and creating for yourself.",
    body: `<p>There's something magical about the first time you create something that works. Not just compiles, not just renders, but actually <em>works</em>. The kind of working that makes you stop and stare at the screen, half-convinced you did something wrong because it couldn't possibly be this satisfying.</p>
    
    <p>I remember that moment clearly. It was a simple to-do list app. Nothing fancy — just a text box, a button, and a list that grew as you typed. But when I clicked that button for the first time and saw my words appear on the screen, something shifted in me. I had commanded the machine, and it had listened.</p>
    
    <h2>The Fear of Starting</h2>
    
    <p>Before that moment, I was a consumer. I scrolled through apps, websites, and interfaces without ever questioning how they came to be. They were just... there. Like mountains or rivers — natural features of the digital landscape that had always existed and always would.</p>
    
    <p>But once you see behind the curtain, you can't unsee it. Every button becomes a question: "How did they make that click animation?" Every form becomes a puzzle: "Where does that data go?" The internet transforms from a place you visit into a place you could potentially build.</p>
    
    <p>And that's terrifying.</p>
    
    <p>Because building means failing. It means staring at error messages that might as well be written in ancient Sumerian. It means watching tutorials where the instructor breezes through concepts that take you three hours to understand. It means feeling stupid, over and over again, until you don't.</p>
    
    <h2>Small Steps, Stubborn Persistence</h2>
    
    <p>I started small. Smaller than small, actually. I made a button that changed color when you hovered over it. Then a page that said "Hello, World!" in three different languages. Then that to-do list, which I promptly abandoned because I discovered a bug I couldn't fix and decided the entire project was cursed.</p>
    
    <p>But I kept coming back. There's a stubbornness in building that I didn't know I had. A willingness to break things, to delete entire folders, to start from scratch at 2 AM because the current approach felt wrong. It's not passion, exactly. It's more like curiosity with commitment.</p>
    
    <p>What kept me going wasn't the finished products. It was the moments in between. The "aha!" when a concept finally clicked. The satisfaction of fixing a bug after hours of hunting. The realization that I was thinking differently — breaking problems into smaller pieces, considering edge cases, anticipating user behavior.</p>
    
    <h2>Creating for Yourself</h2>
    
    <p>Here's what I've learned: build for yourself first. Not for an audience, not for a portfolio, not for Twitter likes. Build because there's something you want to exist in the world, and you can't find it anywhere else.</p>
    
    <p>My best projects are the ones I built to solve my own problems. A habit tracker that worked exactly the way my brain works. A reading list that didn't try to sell me anything. This website — a digital garden where I can plant ideas and watch them grow, pruning when necessary, letting some areas go wild.</p>
    
    <p>When you build for yourself, perfectionism loses its grip. You're not trying to impress anyone. You're just trying to make something useful, something that brings you joy or saves you time or organizes your thoughts. The stakes are low, which paradoxically makes the work better.</p>
    
    <h2>The Accidental Community</h2>
    
    <p>Something unexpected happened along the way. When I started sharing what I built — not to promote, just to document — people reached out. They had questions. They wanted to know how I did something, or why I chose this approach over that one. They shared their own projects, their own struggles, their own "aha!" moments.</p>
    
    <p>I wasn't alone in this. There were others, thousands of others, all around the world, sitting at their screens at odd hours, muttering curses at uncooperative code, feeling that same surge of triumph when things finally worked. We were a community of strangers, connected by the universal language of "have you tried turning it off and on again?"</p>
    
    <p>That's the real gift of making things. Not the things themselves, but the doors they open. The connections they create. The way they change how you see the world — not as a collection of finished products, but as an endless series of possibilities waiting to be built.</p>
    
    <h2>Still Learning</h2>
    
    <p>I'm still a beginner in so many ways. There are entire fields I haven't touched, concepts that make my head spin, tools that feel overwhelming every time I open them. But I've learned to be comfortable with not knowing. In fact, I've learned to love it.</p>
    
    <p>Every new technology is a new mystery to solve. Every error message is a puzzle. Every failed project is a lesson in what not to do next time. The learning never stops, and that's the point.</p>
    
    <p>If you're reading this and you've been thinking about making something — anything — I have one piece of advice: start ugly. Start small. Start with something so simple that it feels embarrassing. Because the first step isn't about the quality of what you build. It's about proving to yourself that you <em>can</em> build.</p>
    
    <p>Everything else follows from there.</p>`,
  },
  {
    slug: "outlasting-the-hustle",
    title: "Outlasting the Hustle",
    date: "2025-11-08",
    modified: "2025-11-08",
    readingTime: "5 min read",
    excerpt: "Why I stopped confusing speed with progress, and started trusting the boring magic of showing up for years.",
    description: "Embracing the long, unglamorous path of gradual improvement.",
    body: `<p>We live in an age of instant transformation. Thirty-day challenges promise to change your life. Viral success stories flood our feeds. Bootcamps claim to take you from zero to job-ready in twelve weeks. The narrative is clear: if you're not improving rapidly, you're doing something wrong.</p>
    
    <p>But real growth isn't like that. Real growth is slow, invisible, and deeply unglamorous. It's the accumulation of small efforts over long periods. It's showing up when no one is watching, making progress that no one can see, trusting that something is happening even when the evidence suggests otherwise.</p>
    
    <p>This is a love letter to slow growth. To the tortoises in a world obsessed with hares.</p>
    
    <h2>The Myth of the Breakthrough</h2>
    
    <p>We love breakthrough moments. The overnight success, the sudden insight, the dramatic transformation. We tell stories about these moments because they're compelling. They make for great movies, inspiring speeches, and viral tweets.</p>
    
    <p>But breakthroughs don't come from nowhere. They're the visible result of invisible work. Years of practice, failure, and incremental improvement that finally reach a tipping point. The "overnight" success was ten years in the making.</p>
    
    <p>When we focus on breakthroughs, we miss the process. We see the flower blooming and forget about the years of root growth. We celebrate the mountain summit and ignore the thousands of steps it took to get there.</p>
    
    <h2>The Compound Interest of Skill</h2>
    
    <p>Skills compound like money in a savings account. Small, consistent deposits grow exponentially over time. But the early stages are discouraging. You put in effort and see almost no return. The balance grows slowly, almost imperceptibly.</p>
    
    <p>This is where most people quit. The gap between effort and results feels too wide. The delayed gratification is too delayed. Why spend an hour practicing when you can't see any improvement?</p>
    
    <p>But growth is happening, even when you can't see it. Neural pathways are forming. Muscle memory is developing. Concepts are slowly clicking into place. You can't observe these changes directly, but they're real.</p>
    
    <h2>The Plateaus Are Part of It</h2>
    
    <p>Skill development isn't linear. You improve rapidly at first, then hit a plateau. The plateau feels like stagnation, but it's actually consolidation. Your brain is integrating what you've learned, making it automatic, creating space for the next level.</p>
    
    <p>Plateaus are frustrating. You practice the same things, make the same mistakes, feel like you're going nowhere. This is when the temptation to quit is strongest. Why keep doing something that isn't working?</p>
    
    <p>But plateaus end. Eventually, something shifts. The skill that felt impossible becomes possible. The concept that seemed foreign becomes familiar. And you realize the plateau wasn't empty time — it was necessary processing.</p>
    
    <h2>Learning to Love the Process</h2>
    
    <p>If you're only in it for the results, slow growth is torture. The gap between where you are and where you want to be seems impossibly wide. Every day of practice feels inadequate. The progress is too slow to be satisfying.</p>
    
    <p>But if you learn to love the process itself — the practice, the learning, the gradual mastery — then slow growth becomes sustainable. The daily work becomes its own reward. The destination matters less because the journey is meaningful.</p>
    
    <p>This is easier said than done. We're wired for immediate rewards. Our brains evolved to prioritize quick wins over long-term gains. Loving the process requires rewiring some deep programming.</p>
    
    <h2>The Social Media Distortion</h2>
    
    <p>Social media makes slow growth harder. Everyone is posting their wins, their transformations, their before-and-afters. No one posts the thousand unremarkable days in between.</p>
    
    <p>This creates a distorted picture of what progress looks like. You see the highlight reel and compare it to your behind-the-scenes. Their breakthrough moments against your daily grind. Their results against your process.</p>
    
    <p>It's not a fair comparison. But more importantly, it's not a useful comparison. Their timeline isn't your timeline. Their path isn't your path. The only meaningful comparison is you today versus you yesterday.</p>
    
    <h2>The Invisible Improvements</h2>
    
    <p>Some of the most important growth is invisible. Increased resilience. Better emotional regulation. Improved ability to handle uncertainty. These don't show up in metrics or photos, but they change everything.</p>
    
    <p>I think about my own coding journey. The early years were marked by visible milestones — building my first website, learning a new language, shipping a project. But the real growth was invisible. Learning to debug patiently. Handling frustration without quitting. Knowing when to ask for help.</p>
    
    <p>These invisible skills don't make for impressive updates. But they're the foundation that makes everything else possible.</p>
    
    <h2>Quantity Leads to Quality</h2>
    
    <p>There's a theory about creative work: quantity leads to quality. The more you produce, the more likely you are to produce something good. This only works if you embrace slow growth.</p>
    
    <p>Your first hundred attempts will mostly be bad. That's not pessimism; it's statistics. But attempt number one hundred and one might be different. And you only get there by doing the hundred that came before.</p>
    
    <p>Ira Glass has a quote about this: "Nobody tells this to people who are beginners... all of us who do creative work, we get into it because we have good taste. But there is this gap. For the first couple years you make stuff, it's just not that good. It's trying to be good, it has potential, but it's not."</p>
    
    <p>The gap is real. The only way across is through.</p>
    
    <h2>The Long Now</h2>
    
    <p>I try to think in decades. Where do I want to be in ten years? Twenty? This long-term perspective changes how I approach daily work. Small improvements compound over time. The person I'll be in ten years is being built by the habits I practice today.</p>
    
    <p>This thinking also reduces pressure. I don't need to master everything today. I don't need to be impressive today. I just need to make small progress. The rest will come in time.</p>
    
    <p>The long now mindset also helps with comparison. That person who's ahead of you? They might have started earlier. Their day one might have been your year negative five. Their head start isn't your failure.</p>
    
    <h2>Trusting the Process</h2>
    
    <p>There's a leap of faith involved in slow growth. You have to trust that effort accumulates, even when you can't see it. You have to believe that consistency matters, even when the results are invisible.</p>
    
    <p>This trust is hard to maintain. Doubt creeps in. Maybe this isn't working. Maybe I'm wasting my time. Maybe I should try something different, something that promises faster results.</p>
    
    <p>But the alternatives — jumping from thing to thing, chasing quick wins, abandoning work before it compounds — don't work either. Slow growth might be slow, but it's real. Fast growth is often illusion.</p>
    
    <h2>The Tortoise Wins</h2>
    
    <p>We know how the fable ends. The tortoise wins. Not because he's faster, but because he doesn't stop. The hare sprints, rests, gets distracted. The tortoise just keeps moving.</p>
    
    <p>Most of us want to be the hare. We want bursts of inspiration, periods of intense productivity, dramatic transformations. But the tortoise has the better strategy. Slow, steady, relentless progress beats sporadic brilliance every time.</p>
    
    <p>So this is my commitment to slow growth. To showing up, even when the results are invisible. To trusting the process, even when doubt creeps in. To being the tortoise in a world of hares.</p>
    
    <p>The growth is happening. I just can't see it yet.</p>`,
  },
  {
    slug: "debugging-the-overthinking-mind",
    title: "Debugging the Overthinking Mind",
    date: "2025-08-03",
    modified: "2025-08-03",
    readingTime: "6 min read",
    excerpt: "On catching my own thoughts in loops, and the slow, imperfect work of learning to think clearly again.",
    description: "What coding taught me about my own thought patterns.",
    body: `<p>There's a moment in debugging when you realize the problem isn't in the code — it's in your understanding of the code. You thought the function did one thing, but it does another. You assumed the variable held one value, but it holds something else entirely. The bug isn't a technical failure; it's a cognitive one.</p>
    
    <p>I started noticing these moments outside of programming. I'd be in an argument with someone, convinced I was right, when suddenly I'd realize: I misunderstood what they were saying. I filled in the gaps with my assumptions. I was debugging a conversation that never actually happened.</p>
    
    <p>Learning to code taught me something unexpected: how to debug my own brain.</p>
    
    <h2>The Assumption Problem</h2>
    
    <p>Most bugs in code come from assumptions. You assume a function returns a number, but it returns a string. You assume an array has items, but it's empty. You assume the user will input valid data, but they paste an entire novel into a username field.</p>
    
    <p>Our brains work the same way. We assume we know what someone meant. We assume we remember events correctly. We assume our reactions are proportional to the situation. These assumptions are mental shortcuts — usually helpful, occasionally disastrous.</p>
    
    <p>The first step in debugging anything is recognizing that you might be wrong. Not probably wrong, not definitely wrong, but <em>might</em> be wrong. That single word creates enough space for curiosity to enter.</p>
    
    <h2>Console Logging My Thoughts</h2>
    
    <p>In coding, when something isn't working, I add console logs. I print out the values at each step. I watch the data flow through the system, seeing where it transforms, where it breaks, where it surprises me.</p>
    
    <p>I've started doing something similar with my thoughts. When I'm upset, anxious, or stuck, I try to "log" what's happening. What specifically triggered this feeling? What story am I telling myself about what happened? What evidence do I have for that story?</p>
    
    <p>It's uncomfortable. Our thoughts feel like reality. Questioning them feels like questioning reality itself. But that's exactly the point — our thoughts aren't reality. They're interpretations. And interpretations can be wrong.</p>
    
    <h2>The Rubber Duck Method</h2>
    
    <p>Programmers use something called "rubber duck debugging." When you're stuck, you explain your problem to a rubber duck (or any inanimate object). The act of explaining often reveals the solution. You hear yourself say the assumptions out loud, and suddenly the flaw becomes obvious.</p>
    
    <p>I rubber duck my life now. When I'm confused about a decision, I explain it to my cat. She doesn't care, but the explanation forces me to organize my thoughts. I hear myself say, "So the reason I'm doing this is..." and sometimes what follows sounds ridiculous even to me.</p>
    
    <p>We rarely hear ourselves think. We're too close to our own thoughts to see them clearly. Externalizing — even to a rubber duck — creates the distance necessary for clarity.</p>
    
    <h2>Edge Cases and Anxiety</h2>
    
    <p>Good programmers think about edge cases. What happens if the input is empty? What if the user clicks this button a thousand times? What if the network fails at exactly this moment?</p>
    
    <p>Anxious brains are excellent at edge cases. What if I fail? What if they hate it? What if something goes wrong? The problem isn't identifying these possibilities — it's that anxious brains treat all edge cases as equally likely.</p>
    
    <p>Learning to code helped me distinguish between possible and probable. Yes, it's <em>possible</em> that everything will go wrong. But is it <em>probable</em>? What's the actual likelihood? What would have to be true for that worst case to happen?</p>
    
    <p>This doesn't eliminate anxiety, but it contains it. It turns vague dread into specific, manageable concerns. And specific concerns can be addressed.</p>
    
    <h2>Refactoring Old Patterns</h2>
    
    <p>In coding, refactoring means restructuring existing code without changing its behavior. You make it cleaner, more efficient, easier to understand. You don't do it because something is broken; you do it because it could be better.</p>
    
    <p>We all have mental patterns that could use refactoring. Reactions that made sense in childhood but don't serve us now. Coping mechanisms that worked in one context but cause problems in another. Beliefs that were installed by someone else and never examined.</p>
    
    <p>Refactoring your brain is hard. These patterns are deeply embedded. They've been running for years, handling millions of "requests." You can't just swap them out overnight.</p>
    
    <p>But you can start small. You can notice when an old pattern runs. You can ask: is this the best way to handle this? Is there a simpler approach? Can I extract this complexity into something more manageable?</p>
    
    <h2>The Infinite Loop of Overthinking</h2>
    
    <p>Sometimes code gets stuck in infinite loops. It keeps doing the same thing over and over, never progressing, never reaching an end condition. The program appears frozen, even though it's working extremely hard.</p>
    
    <p>Overthinking is an infinite loop. The same thoughts, circling endlessly. No new information enters. No decision is made. Just spinning, spinning, spinning, consuming mental resources with nothing to show for it.</p>
    
    <p>The solution in code is to break the loop. Add a counter. Set a timeout. Force an exit condition.</p>
    
    <p>In life, I use a similar strategy. When I catch myself overthinking, I set a timer. Ten minutes to think about this problem. When the timer goes off, I have to make a decision or move on. It feels artificial, but it works. The constraint forces focus.</p>
    
    <h2>Comments for Future Me</h2>
    
    <p>Good code has comments. Not comments that explain what the code does (the code should do that), but comments that explain <em>why</em>. Why did I choose this approach? What was I thinking at the time? What should future me know about this decision?</p>
    
    <p>I started journaling for the same reason. Not to record what happened, but to record what I was thinking. Future me will look back and wonder, "Why did I make that choice?" My journal is the comment that explains.</p>
    
    <p>We're all maintaining legacy code — our past selves wrote it, and our present selves have to live with it. Good comments make that maintenance easier.</p>
    
    <h2>Handling Errors Gracefully</h2>
    
    <p>In coding, errors are inevitable. The network will fail. The user will do something unexpected. The API will return garbage. Good programs don't avoid errors; they handle them. They fail gracefully, recover when possible, and always inform the user what happened.</p>
    
    <p>Life has errors too. Plans fall through. People disappoint us. We make mistakes. The question isn't whether these errors will happen — they will. The question is how we handle them.</p>
    
    <p>I've learned to build error handling into my expectations. Things will go wrong. That's not pessimism; it's realism. And with realistic expectations, I can plan for recovery. What's my fallback? What's my backup plan? If this fails, what's my next step?</p>
    
    <h2>The Never-Ending Debug</h2>
    
    <p>Code is never truly finished. There are always improvements to make, edge cases to handle, performance to optimize. The debugging never really ends; it just reaches a point where the remaining issues are acceptable.</p>
    
    <p>The same is true of ourselves. We're never "done." There's no final version where all bugs are fixed and all features are implemented. We just reach a point where we're functional enough, where the major issues are handled, where we can ship and iterate.</p>
    
    <p>That's okay. In fact, it's liberating. Perfection isn't the goal. Improvement is. Each day is a new commit, a small iteration on the previous version. Some days we introduce new bugs. Some days we fix old ones. Progress isn't linear.</p>
    
    <p>So I'm learning to debug myself with patience. To treat my mistakes as information, not judgments. To approach my own mind with the same curiosity I bring to a broken program: "Hmm, that's interesting. I wonder why that happened?"</p>
    
    <p>The bug isn't who I am. It's just something I'm working through. And every bug fixed is a step toward better code — and a better me.</p>`,
  },
  {
    slug: "the-psychology-of-done",
    title: "The Psychology of Done",
    date: "2025-06-14",
    modified: "2025-06-14",
    readingTime: "5 min read",
    excerpt: "On the strange weight of the final ten percent, and the freedom that waits on the other side of good enough.",
    description: "Why starting is easy and finishing is everything.",
    body: `<p>I have a folder on my computer called "Graveyard." It contains 47 abandoned projects. Some are just empty folders with ambitious names. Others have hundreds of lines of code, designs half-implemented, dreams half-realized. They all have one thing in common: I never finished them.</p>
    
    <p>Starting is intoxicating. The blank canvas, the new repository, the first lines of code — everything is possibility. The project exists in a perfect state, unsullied by the realities of implementation. In your mind, it's already successful, already beautiful, already complete.</p>
    
    <p>Then comes the middle. The messy, grinding, doubt-filled middle. And that's where most projects go to die.</p>
    
    <h2>The Valley of Despair</h2>
    
    <p>Every project has a phase where the initial excitement wears off but the end is still far away. I call it the Valley of Despair. The code is messy. The architecture needs refactoring. There are bugs you don't understand and features you don't know how to implement.</p>
    
    <p>This is where the siren song of new projects becomes loudest. "Start fresh," it whispers. "This time will be different. This time you'll do it right." And so you abandon the current project for a new one, trading the valley of despair for the mountaintop of possibility.</p>
    
    <p>But the cycle repeats. Every project has a valley. The only way out is through.</p>
    
    <h2>The Shame of the Unfinished</h2>
    
    <p>There's a particular shame to unfinished projects. It's not just wasted time; it's broken promises. Promises to yourself, mostly. "This time I'll finish it." "This time I'll see it through." Each abandoned project is evidence of your lack of discipline, your inability to commit, your fear of completion.</p>
    
    <p>Or at least, that's the story we tell ourselves. The truth is more complicated. Some projects should be abandoned. Some ideas don't survive contact with reality. Knowing when to quit is as important as knowing when to persist.</p>
    
    <p>But most of my abandoned projects weren't abandoned because they were bad ideas. They were abandoned because finishing is hard. Because the last 20% takes 80% of the effort. Because polishing, testing, documenting — the unglamorous work of completion — is boring compared to the thrill of creation.</p>
    
    <h2>Defining "Done"</h2>
    
    <p>One problem with finishing is that we rarely define what "finished" means. Is a project finished when it works? When it's deployed? When it's perfect? That last one is a trap. Perfect is the enemy of done. If perfection is the standard, nothing ever finishes.</p>
    
    <p>I've started defining "done" explicitly at the start of projects. What does version 1.0 look like? What are the minimum features? What can wait for later? This isn't about limiting ambition; it's about creating achievable milestones.</p>
    
    <p>Done is a scope decision. It's saying: "This is enough for now." It's accepting that good enough is, in fact, good enough.</p>
    
    <h2>The Power of Ugly Finished</h2>
    
    <p>Finished is better than perfect. An ugly, buggy, incomplete thing that exists is infinitely more valuable than a beautiful thing that doesn't. You can iterate on something that exists. You can learn from something that exists. You can't do anything with something that only exists in your head.</p>
    
    <p>I have a personal rule now: ship before you're ready. Not recklessly — I still test, still review, still make sure things work. But I don't wait for perfect. I don't wait until every feature is implemented. I ship when it's useful, even if it's ugly.</p>
    
    <p>The first version of this website was embarrassing. The design was basic, the content was sparse, and there were bugs I didn't discover until weeks later. But it was live. It was real. And that made all the difference.</p>
    
    <h2>The Discipline of Completion</h2>
    
    <p>Finishing is a skill. Like any skill, it can be developed through practice. But it's a peculiar kind of practice because each project is different. You can't just repeat the same motions. You have to apply the principles of completion to ever-changing circumstances.</p>
    
    <p>What are those principles? For me, they're:</p>
    
    <p><strong>Define done upfront.</strong> Know what you're aiming for before you start. Change it if you need to, but have a target.</p>
    
    <p><strong>Work in public.</strong> Tell people what you're building. Create accountability. The fear of public failure is a powerful motivator.</p>
    
    <p><strong>Embrace the grind.</strong> The middle is supposed to be hard. Expect it. Don't interpret difficulty as a sign to quit.</p>
    
    <p><strong>Set deadlines.</strong> Even arbitrary ones. Constraints force decisions. Without a deadline, you can polish forever.</p>
    
    <p><strong>Celebrate completion.</strong> Actually finish, actually celebrate. Reflect on what you learned. Then start the next thing.</p>
    
    <h2>The Projects That Made It</h2>
    
    <p>Looking at the projects I actually finished, I notice patterns. They're usually smaller than the ones I abandoned. They have clearer definitions of done. I worked on them consistently rather than in bursts. And most importantly, I shipped them before I felt ready.</p>
    
    <p>None of my finished projects are perfect. Most of them have issues I still want to fix, features I still want to add. But they're real. They exist in the world. People use them, or at least could if they wanted to.</p>
    
    <p>That existence is what separates the finishers from the perpetual starters. It's not talent. It's not even discipline, really. It's the willingness to accept imperfection and ship anyway.</p>
    
    <h2>Finishing as Practice</h2>
    
    <p>I've started treating finishing as a practice in itself. Not just a means to an end, but a skill worth developing. Each completed project makes the next one easier. You build confidence. You build processes. You build a portfolio of evidence that you can, in fact, finish things.</p>
    
    <p>That's why I now prioritize finishing over starting. I'd rather complete one project than start ten. I'd have a small portfolio of finished work than a large graveyard of possibilities.</p>
    
    <p>The projects in my Graveyard folder aren't failures. They're lessons. Each one taught me something about what I want to build, how I want to work, who I want to become. But lessons without application are just information. The goal is to apply what I've learned.</p>
    
    <p>So here's my commitment: finish before starting. Complete what's in progress before beginning something new. Ship the imperfect thing rather than chasing the perfect thing that doesn't exist.</p>
    
    <p>Starting is easy. Everyone starts. Finishing is rare. Finishing is valuable. Finishing is everything.</p>
    
    <p>What will you finish today?</p>`,
  },
  {
    slug: "subtracting-the-noise",
    title: "Subtracting the Noise",
    date: "2025-05-20",
    modified: "2025-05-20",
    readingTime: "3 min read",
    excerpt: "An argument for taking things away instead of adding them. On the clarity that arrives only after the culling.",
    description: "Less is usually better. Some thoughts on keeping things simple.",
    body: `<p>I used to think that complexity was a sign of sophistication. The more features a thing had, the more options it offered, the better it must be. I collected apps with endless settings, subscribed to services with dozens of features, and built projects that tried to do everything at once.</p>
    
    <p>It was exhausting. And unnecessary. And, worst of all, ineffective.</p>
    
    <h2>The Seduction of More</h2>
    
    <p>We live in a culture of more. More features, more options, more customization. The logic seems sound: if some is good, more must be better. But it rarely works out that way.</p>
    
    <p>Every feature you add is a decision someone has to make. Every option is a question that needs answering. Every customization is a setting that can be wrong. Complexity doesn't just make things harder to use — it makes them harder to choose.</p>
    
    <p>I think about this every time I open a settings menu with fifty toggles. I came here to change one thing. Now I'm questioning every choice I've ever made. Is this the optimal configuration? Am I using this tool wrong? The anxiety of optimization creeps in, and suddenly I'm not working anymore — I'm tweaking.</p>
    
    <h2>Learning to Subtract</h2>
    
    <p>The hardest part of simplicity isn't knowing what to include. It's knowing what to leave out. Every project starts with ambition. Wouldn't it be cool if it did this? And this? And what about this edge case that only affects 0.1% of users?</p>
    
    <p>Before you know it, you've built a monstrosity. It does everything, but it does nothing well. Users are confused. You're exhausted. And the original purpose — the one thing you set out to do — is buried under layers of well-intentioned features.</p>
    
    <p>I've learned to ask a different question: what can I remove? Not what can I add, not what would be nice to have, but what can I take away without breaking the core purpose?</p>
    
    <p>The answer is usually: a lot more than you think.</p>
    
    <h2>The Beauty of Constraints</h2>
    
    <p>Constraints are often seen as limitations. But I've come to see them as creative fuel. When you can't do everything, you're forced to choose what matters. And that choice — that deliberate, sometimes painful choice — is what creates focus.</p>
    
    <p>Twitter's original 140-character limit wasn't a bug; it was a feature. It forced brevity. It made people edit ruthlessly. It created a format that was distinct, memorable, and surprisingly expressive.</p>
    
    <p>I try to apply this thinking to everything I build. What's the constraint that will force creativity? What's the limitation that will make this better, not worse?</p>
    
    <h2>Simple is Hard</h2>
    
    <p>Here's the paradox: simple is harder than complex. Anyone can add features. It takes skill to remove them. Anyone can handle the happy path. It takes thought to eliminate the edge cases.</p>
    
    <p>When you build something simple, every decision matters more. There's nowhere to hide. Each element has to justify its existence. If it doesn't serve the core purpose, it goes.</p>
    
    <p>This is scary. It means saying no to things that might be useful. It means disappointing people who want that one extra feature. It means accepting that your thing won't be everything to everyone.</p>
    
    <p>But it also means clarity. It means purpose. It means building something that knows what it is and doesn't apologize for what it isn't.</p>
    
    <h2>Simplicity in Life</h2>
    
    <p>This isn't just about software. I try to apply the same thinking to my life. Fewer possessions, fewer commitments, fewer things competing for my attention.</p>
    
    <p>It's not about deprivation. It's about space. When you clear away the clutter — physical, digital, mental — you create room for what actually matters.</p>
    
    <p>I've simplified my wardrobe to a few basics that work together. I've simplified my diet to meals I enjoy that don't require much thought. I've simplified my schedule to protect the blocks of time when I do my best work.</p>
    
    <p>Each simplification was a small act of rebellion against the cult of more. And each one gave me something back: time, energy, clarity.</p>
    
    <h2>The Eternal Temptation</h2>
    
    <p>I still slip. I still see a new tool and think, "Maybe this will solve all my problems." I still start projects with too much ambition and have to ruthlessly cut them back. I still occasionally find myself in settings menus, tweaking things that don't need tweaking.</p>
    
    <p>Simplicity isn't a destination. It's a practice. You don't achieve it and move on; you have to keep choosing it, day after day, project after project.</p>
    
    <p>But the effort is worth it. Because when you strip away the unnecessary, what's left is something pure. Something focused. Something that actually works.</p>
    
    <p>And that's worth more than any number of features.</p>`,
  },
  {
    slug: "the-messy-middle-of-mastery",
    title: "The Messy Middle of Mastery",
    date: "2025-03-28",
    modified: "2025-03-28",
    readingTime: "4 min read",
    excerpt: "On the valley between starting and finishing, where excitement dies and the real, invisible work begins.",
    description: "The fear, the vulnerability, and the unexpected benefits of sharing while you learn.",
    body: `<p>The first blog post I ever published was terrible. Not charmingly amateur or endearingly rough — just bad. The writing was stilted, the ideas half-formed, and the conclusions predictable. I knew it was bad when I hit publish. But I published it anyway.</p>
    
    <p>That was three years ago. I've published dozens of posts since then. Some were good, some were bad, most were somewhere in between. But that first terrible post was the most important one. It broke the seal. It proved I could put something imperfect into the world and survive.</p>
    
    <h2>The Fear of Exposure</h2>
    
    <p>We learn in private by default. We practice in our bedrooms, study behind closed doors, and only emerge when we've achieved competence. The idea of sharing our learning process — our mistakes, our confusion, our half-understood ideas — feels dangerous. What if people judge us? What if they think we're stupid? What if we're wrong?</p>
    
    <p>These fears are valid. People do judge. People will think you're stupid sometimes. You will be wrong occasionally. But the alternative — learning in isolation — has costs too.</p>
    
    <p>When you learn in private, you miss feedback. You miss connections with people who are learning the same things. You miss the accountability that comes from public commitment. And perhaps most importantly, you miss the chance to help others who are just a few steps behind you.</p>
    
    <h2>The Beginner's Advantage</h2>
    
    <p>Here's something counterintuitive: beginners make the best teachers for other beginners. Experts have forgotten what it's like to not know. They've internalized so much knowledge that they can't explain the basics without skipping crucial steps.</p>
    
    <p>But someone who just learned something yesterday? They remember exactly what was confusing. They remember which explanations helped and which didn't. They're close enough to the struggle to empathize with it.</p>
    
    <p>When you learn in public, you're not just documenting for yourself. You're creating a trail for the people behind you. Your confusion today becomes their roadmap tomorrow.</p>
    
    <h2>The Unexpected Connections</h2>
    
    <p>I started this blog expecting nothing. Maybe my mom would read it. Maybe a few friends. I didn't expect strangers to reach out. I didn't expect job offers. I didn't expect friendships that span continents.</p>
    
    <p>But that's what happened. When you share your work, you become findable. People stumble across your writing when they're searching for answers to the same questions. They recognize themselves in your struggles. And sometimes, they reach out.</p>
    
    <p>These connections are different from the ones you make at networking events or on LinkedIn. They're based on genuine shared interests. They've seen how you think. They know what you care about. The relationship starts from a place of authenticity.</p>
    
    <h2>The Accountability Effect</h2>
    
    <p>There's something powerful about saying "I'm going to learn this" in public. Suddenly, it's not just a private goal you can abandon without consequence. It's a commitment. People are watching — or at least they could be.</p>
    
    <p>This accountability can be paralyzing if you're not careful. The pressure to perform can stop you from starting. But used correctly, it's fuel. It's the push you need on days when motivation is low. It's the reason you push through the difficult middle instead of quitting.</p>
    
    <p>I don't advocate for announcing every intention publicly. That way lies burnout and anxiety. But choosing one thing to learn in public — one project, one skill, one journey — creates a powerful forcing function.</p>
    
    <h2>The Documentation Dividend</h2>
    
    <p>Even if no one reads what you share, learning in public has value. It forces you to organize your thoughts. To explain concepts in your own words. To confront the gaps in your understanding.</p>
    
    <p>You can't fake understanding when you're writing. The blank page demands clarity. You have to decide what you actually believe, what you actually know, what you can actually defend.</p>
    
    <p>Months later, you'll look back at what you wrote and see how far you've come. The concepts that confused you will seem obvious. The problems that seemed insurmountable will look trivial. That progress is invisible day-to-day, but documentation makes it visible.</p>
    
    <h2>The Vulnerability of Imperfection</h2>
    
    <p>The hardest part of learning in public isn't the technical challenge of creating content. It's the emotional challenge of being seen while you're still figuring things out.</p>
    
    <p>We want to present a polished version of ourselves. The competent professional, the knowledgeable expert, the person who has it all figured out. Learning in public requires showing the unpolished version. The confused student, the struggling beginner, the person who doesn't have it figured out yet.</p>
    
    <p>That's vulnerable. But it's also liberating. Once you admit you don't have it figured out, you're free to actually learn. The performance of competence gives way to the reality of growth.</p>
    
    <h2>Practical Steps</h2>
    
    <p>If you're convinced but don't know where to start, here are some practical steps:</p>
    
    <p><strong>Start small.</strong> You don't need to launch a blog or a YouTube channel. Share one thing you learned today on Twitter. Write one paragraph about a concept you're studying.</p>
    
    <p><strong>Focus on your own questions.</strong> Don't try to teach things you don't understand. Document your confusion, your process, your questions. That's valuable too.</p>
    
    <p><strong>Be consistent, not perfect.</strong> One post a month is better than ten posts in January and nothing the rest of the year. Consistency builds trust — with your audience and with yourself.</p>
    
    <p><strong>Engage with others.</strong> Learning in public isn't a broadcast; it's a conversation. Respond to comments. Read other people's work. Build relationships.</p>
    
    <p><strong>Embrace the cringe.</strong> You'll look back at early work and wince. That's good. It means you've grown. Don't let future embarrassment stop present action.</p>
    
    <h2>The Long Game</h2>
    
    <p>Learning in public is a long game. You won't see results immediately. For months, maybe years, it will feel like you're shouting into the void. That's normal.</p>
    
    <p>But eventually, something shifts. People start finding your work. They start sharing it. They start reaching out. The compound interest of consistency kicks in, and suddenly you have a body of work that speaks for itself.</p>
    
    <p>More importantly, you'll have documented your own growth. You'll have a record of who you were and who you've become. That's valuable in ways that can't be measured in followers or page views.</p>
    
    <p>So start before you're ready. Share before you're expert. Document the journey, not just the destination. The people who matter aren't looking for perfection — they're looking for honesty, for curiosity, for the courage to be seen.</p>
    
    <p>Learning in public isn't about building an audience. It's about building yourself — and letting others watch.</p>`,
  },
];

export function getAllPosts(): BlogPost[] {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
