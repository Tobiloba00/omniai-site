
export interface BlogPost {
  slug: string;
  category: string;
  title: string;
  description: string;
  image: string;
  hint: string;
  content: {
    type: 'paragraph' | 'quote' | 'list';
    text?: string;
    items?: string[];
  }[];
  metadata: {
    date: string;
    author: string;
    readTime: string;
  };
  toc: { title: string; id: string }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "stop-losing-leads",
    category: "Productivity",
    title: "Stop Losing Leads: Why Your Business Needs a 24/7 AI Agent",
    description: "Let’s be honest — attention spans are short, and patience is even shorter. When a prospect lands on your site or sends a message, the clock starts ticking.",
    image: "/Stop Losing Leads.jpeg",
    hint: "business stress",
    metadata: {
      date: "June 26, 2025",
      author: "Omniai Insights",
      readTime: "3 min read"
    },
    toc: [
      { title: "The Reality: You’re Already Losing Leads", id: "the-reality-youre-already-losing-leads" },
      { title: "What Happens When You’re Not There", id: "what-happens-when-youre-not-there" },
      { title: "Meet the AI Agent", id: "meet-the-ai-agent" },
      { title: "🕒 Instant Response, Any Hour", id: "instant-response-any-hour" },
      { title: "📉 Fewer Missed Opportunities", id: "fewer-missed-opportunities" },
      { title: "📈 Higher Lead Conversion", id: "higher-lead-conversion" },
      { title: "🔗 CRM Integration & Follow-Through", id: "crm-integration--follow-through" },
      { title: "Real Use-Case: 30% Close Rate Boost", id: "real-use-case-30-close-rate-boost" },
      { title: "What Makes Omniai Agents Different", id: "what-makes-omniai-agents-different" },
      { title: "🧠 Ready to Let AI Handle It?", id: "ready-to-let-ai-handle-it" }
    ],
    content: [
        { type: 'paragraph', text: 'Let’s be honest — attention spans are short, and patience is even shorter. When a prospect lands on your site or sends a message, the clock starts ticking.' },
        { type: 'paragraph', text: 'If your business doesn’t respond within minutes, that lead is gone. Not because your service isn’t good — but because you weren’t fast enough.' },
        { type: 'paragraph', text: 'Most small business owners wear every hat. When you\'re on a client call, sleeping, or simply taking a break — your leads don’t stop coming in.' },
        { type: 'paragraph', text: 'But if no one replies, no one converts. And unlike loyal customers, new leads don’t wait.' },
        { type: 'paragraph', text: 'An AI agent is your always-on, always-polite, always-working assistant.' },
        { type: 'list', items: ['It answers questions', 'It qualifies leads', 'It books appointments', 'It logs everything — and never forgets'] },
        { type: 'paragraph', text: 'You don’t need to hire a VA or burn yourself out. You need an agent that never stops.' },
        { type: 'quote', text: '🕒 Instant Response, Any Hour' },
        { type: 'paragraph', text: 'Whether it’s 2PM or 2AM, your AI agent replies in seconds — while the lead is still warm.' },
        { type: 'quote', text: '📉 Fewer Missed Opportunities' },
        { type: 'paragraph', text: 'AI doesn\'t have bad days, forget to reply, or miss messages. Every lead gets answered — every time.' },
        { type: 'quote', text: '📈 Higher Lead Conversion' },
        { type: 'paragraph', text: 'Speed builds trust. When your brand is the first to respond, you immediately feel more professional — and more worth hiring.' },
        { type: 'quote', text: '🔗 CRM Integration & Follow Through' },
        { type: 'paragraph', text: 'Omniai agents don’t just reply — they execute.' },
        { type: 'list', items: ['Log leads in Google Sheets', 'Trigger follow-up emails', 'Book calls directly into your calendar', 'Send reminders'] },
        { type: 'quote', text: 'Real Use Case: 30% Close Rate Boost' },
        { type: 'paragraph', text: 'One founder had a basic contact form and checked it manually. After adding a 24/7 Omniai agent: Her calendar filled up with real prospects, response time went from 10 hours to 1 minute, and conversions jumped 30% within two weeks.' },
        { type: 'quote', text: 'What Makes Omniai Agents Different' },
        { type: 'paragraph', text: 'They’re not generic chatbots. They’re intelligent responders built around your voice, systems, and process.' },
        { type: 'quote', text: '🧠 Ready to Let AI Handle It?' },
        { type: 'paragraph', text: 'If you’re tired of missing messages and manually chasing leads, it\'s time for a change.' },
    ]
  },
  {
    slug: "workflow-chaos-to-clarity",
    category: "Workflows",
    title: "Workflow Chaos to Clarity: Why Automating Tasks Isn’t Optional Anymore",
    description: "You check WhatsApp, sort emails, open Google Sheets, update your calendar — and that’s just before lunch. This is what most small businesses call “normal.”",
    image: "/Workflow Chaos to Clarity.jpg",
    hint: "workflow disconnection",
    metadata: {
      date: "July 2, 2025",
      author: "Omniai Insights",
      readTime: "4 min read"
    },
    toc: [
      { title: "Your Day Is Disconnected", id: "your-day-is-disconnected" },
      { title: "The Hidden Cost of Manual Work", id: "the-hidden-cost-of-manual-work" },
      { title: "Meet the AI Workflow", id: "meet-the-ai-workflow" },
      { title: "🔗 From Form to Follow-Up", id: "from-form-to-follow-up" },
      { title: "⚙️ Remove Human Bottlenecks", id: "remove-human-bottlenecks" },
      { title: "📊 Keep Everything In Sync", id: "keep-everything-in-sync" },
      { title: "Real Workflow in Action", id: "real-workflow-in-action" },
      { title: "Build Once, Run Forever", id: "build-once-run-forever" },
      { title: "🧠 Ready to Streamline?", id: "ready-to-streamline" }
    ],
    content: [
      { type: 'paragraph', text: 'You check WhatsApp, sort emails, open Google Sheets, update your calendar — and that’s just before lunch.' },
      { type: 'paragraph', text: 'This is what most small businesses call “normal.” Disjointed tools, repeated effort, and zero connection. It’s not just inefficient — it’s expensive.' },
      { type: 'paragraph', text: 'Every time you forward an email, copy info into a sheet, or remind yourself to reply — you waste brainpower. And when you’re busy? Things fall through the cracks.' },
      { type: 'paragraph', text: 'What you need isn’t more reminders. You need a workflow.' },
      { type: 'quote', text: 'Meet the AI Workflow' },
      { type: 'paragraph', text: 'A workflow is a chain of automated actions:' },
      { type: 'list', items: ['Lead submits form', 'AI replies and qualifies them', 'If they’re a match, it sends a calendar link', 'Info is saved in a CRM', 'You get a Slack notification'] },
      { type: 'paragraph', text: 'And you never touch a button.' },
      { type: 'quote', text: '🔗 From Form to Follow Up' },
      { type: 'paragraph', text: 'Your form isn’t just a form — it’s a trigger. Every inquiry can launch a full lead-handling system instantly.' },
      { type: 'quote', text: '⚙️ Remove Human Bottlenecks' },
      { type: 'paragraph', text: 'Forget chasing inboxes and forgetting tasks. AI workflows do the remembering for you.' },
      { type: 'quote', text: '📊 Keep Everything In Sync' },
      { type: 'paragraph', text: 'One change updates everything: Notion, Airtable, Google Sheets, CRMs — all stay synced.' },
      { type: 'quote', text: 'Real Workflow in Action' },
      { type: 'paragraph', text: 'A solo consultant saved 8 hours a week by having an AI agent manage:' },
      { type: 'list', items: ['Lead replies', 'Calendly bookings', 'CRM tagging', 'Thank-you messages'] },
      { type: 'paragraph', text: 'Instead of juggling 10 tasks, she focused on closing deals.' },
      { type: 'quote', text: 'Build Once, Run Forever' },
      { type: 'paragraph', text: 'Once you build your workflow — it just runs. No breaks. No burnout. No babysitting.' },
      { type: 'quote', text: '🧠 Ready to Streamline?' },
      { type: 'paragraph', text: 'Let Omniai design your full business automation workflow — custom-built to save you time, every day.' },
    ]
  },
  {
    slug: "from-hustle-to-hands-free",
    category: "Case Studies",
    title: "From Hustle to Hands-Free: Real AI Wins for Solo Founders",
    description: "Being a solo founder often means working twice as hard to achieve half as much. You’re building, selling, supporting, and following up — all at once.",
    image: "/Solo Founder Automation.jpg",
    hint: "solo founder working",
    metadata: {
      date: "July 9, 2025",
      author: "Omniai Insights",
      readTime: "3 min read"
    },
    toc: [
      { title: "The Solo Struggle Is Real", id: "the-solo-struggle-is-real" },
      { title: "Why Hiring Isn’t Always the Answer", id: "why-hiring-isnt-always-the-answer" },
      { title: "Enter the AI Assistant", id: "enter-the-ai-assistant" },
      { title: "🗓️ Automating Bookings", id: "automating-bookings" },
      { title: "📬 Auto Replies While You Sleep", id: "auto-replies-while-you-sleep" },
      { title: "📊 Better Onboarding = Better Clients", id: "better-onboarding--better-clients" },
      { title: "Case Study: Freelance Consultant", id: "case-study-freelance-consultant" },
      { title: "🧠 From Chaos to Clarity", id: "from-chaos-to-clarity" }
    ],
    content: [
        { type: 'paragraph', text: 'Being a solo founder often means working twice as hard to achieve half as much. You’re building, selling, supporting, and following up — all at once.' },
        { type: 'paragraph', text: 'And success comes with a cost: the more leads you get, the more overwhelmed you become.' },
        { type: 'quote', text: 'Why Hiring Isn’t Always the Answer' },
        { type: 'paragraph', text: 'Hiring sounds like the dream — but it’s not always realistic. What if you don’t have time to train someone? What if your cash flow can’t support a VA?' },
        { type: 'paragraph', text: 'AI isn’t a replacement for people — it’s a replacement for repetition.' },
        { type: 'quote', text: 'Enter the AI Assistant' },
        { type: 'paragraph', text: 'An Omniai agent is like cloning the part of you that answers DMs, books calls, and sends onboarding steps — instantly.' },
        { type: 'paragraph', text: 'It handles:' },
        { type: 'list', items: ['Lead replies', 'Call scheduling', 'Contract reminders', 'Info capture'] },
        { type: 'paragraph', text: 'All on its own.' },
        { type: 'quote', text: '🗓️ Automating Bookings' },
        { type: 'paragraph', text: 'Instead of back and forths, your AI agent offers your next available times and books the meeting on your calendar — then reminds the lead.' },
        { type: 'quote', text: '📬 Auto Replies While You Sleep' },
        { type: 'paragraph', text: 'Whether it’s WhatsApp, form submissions, or Twitter DMs — your agent replies fast, professionally, and with context.' },
        { type: 'quote', text: '📊 Better Onboarding = Better Clients' },
        { type: 'paragraph', text: 'Let your agent collect what you need: Budget, goals, use case — before the first call. You show up prepared, not guessing.' },
        { type: 'quote', text: 'Case Study: Freelance Consultant' },
        { type: 'paragraph', text: 'A solo copywriter installed an Omniai agent that handled all her lead inquiries.' },
        { type: 'list', items: ['Her inbox went silent — because the agent was working', '9 leads booked in the first week', 'She doubled her monthly income — without burning out'] },
        { type: 'quote', text: '🧠 From Chaos to Clarity' },
        { type: 'paragraph', text: 'You don’t need to hustle harder — just automate smarter.' },
    ]
  },
  {
    slug: "automate-or-fall-behind",
    category: "Strategy",
    title: "Automate or Fall Behind: Why AI Agents Are the New Standard",
    description: "We’re no longer in a world where manual effort gives you a competitive edge. The fastest companies — not just the biggest — are winning. The difference? They automate.",
    image: "/AI Agents Are the New Standard.jpg",
    hint: "business growth chart",
    metadata: {
      date: "July 16, 2025",
      author: "Omniai Insights",
      readTime: "4 min read"
    },
    toc: [
      { title: "The New Divide in Business", id: "the-new-divide-in-business" },
      { title: "What’s an AI Agent (and Why It’s Different)", id: "whats-an-ai-agent-and-why-its-different" },
      { title: "🚀 Speed Wins Sales", id: "speed-wins-sales" },
      { title: "💰 Automation Without Hiring", id: "automation-without-hiring" },
      { title: "🔗 Plug Into What You Already Use", id: "plug-into-what-you-already-use" },
      { title: "Case Example: The 1-Week Turnaround", id: "case-example-the-1-week-turnaround" },
      { title: "🧠 You Don’t Need to Be Big — Just Smart", id: "you-dont-need-to-be-big--just-smart" }
    ],
    content: [
        { type: 'paragraph', text: 'We’re no longer in a world where manual effort gives you a competitive edge. The fastest companies — not just the biggest — are winning.' },
        { type: 'paragraph', text: 'The difference? They automate.' },
        { type: 'quote', text: 'What’s an AI Agent (and Why It’s Different)' },
        { type: 'paragraph', text: 'A chatbot answers questions. An AI agent solves problems and takes action.' },
        { type: 'paragraph', text: 'Built with intent, your Omniai agent can:' },
        { type: 'list', items: ['Respond in your voice', 'Route leads through workflows', 'Handle bookings, reminders, onboarding, and follow-up', 'Report everything to you'] },
        { type: 'quote', text: '🚀 Speed Wins Sales' },
        { type: 'paragraph', text: 'The faster you reply, the more you close. AI agents reply in seconds — even while you sleep.' },
        { type: 'quote', text: '💰 Automation Without Hiring' },
        { type: 'paragraph', text: 'Once built, it runs forever. No payroll. No sick leave. No hand-holding.' },
        { type: 'quote', text: '🔗 Plug Into What You Already Use' },
        { type: 'paragraph', text: 'It works with Google Workspace, Airtable, Notion, Stripe, Calendly, and more. No need to change your systems — it adapts to them.' },
        { type: 'quote', text: 'Case Example: The 1 Week Turnaround' },
        { type: 'paragraph', text: 'A founder struggling with late replies had an agent built and deployed in under 7 days. By the second week:' },
        { type: 'list', items: ['Lead response time dropped from 5 hours to 45 seconds', 'Bookings doubled', 'She got her evenings back'] },
        { type: 'quote', text: '🧠 You Don’t Need to Be Big — Just Smart' },
        { type: 'paragraph', text: 'Don’t fall behind while others scale with systems. Let Omniai build your digital teammate — and watch what happens next.' },
    ]
  },
  {
    slug: "what-should-your-first-ai-agent-do",
    category: "Strategy",
    title: "What Should Your First AI Agent Actually Do?",
    description: "You want automation. You know you need it. But you don’t know where to start. Start with the most repetitive, costly thing you do each day.",
    image: "/What Should Your First Agent Do.jpg",
    hint: "decision making",
    metadata: {
      date: "July 23, 2025",
      author: "Omniai Insights",
      readTime: "3 min read"
    },
    toc: [
      { title: "So Many Options — Where Do You Start?", id: "so-many-options--where-do-you-start" },
      { title: "💬 Lead Qualification", id: "lead-qualification" },
      { title: "🗓️ Appointment Booking", id: "appointment-booking" },
      { title: "📦 Post-Sale Follow-Up", id: "post-sale-follow-up" },
      { title: "Focus on ROI (Not Features)", id: "focus-on-roi-not-features" },
      { title: "What Most Omniai Clients Build First", id: "what-most-omniai-clients-build-first" },
      { title: "🧠 Start Small. Scale Fast", id: "start-small-scale-fast" }
    ],
    content: [
      { type: 'paragraph', text: 'You want automation. You know you need it. But you don’t know where to start.' },
      { type: 'paragraph', text: 'Start with the most repetitive, costly thing you do each day.' },
      { type: 'quote', text: '💬 Lead Qualification' },
      { type: 'paragraph', text: 'You’re getting inquiries. Great. Now let’s filter out the fluff.' },
      { type: 'paragraph', text: 'An AI agent can:' },
      { type: 'list', items: ['Ask pre qualifying questions', 'Score and sort leads', 'Forward the best ones to you', 'Dismiss the rest'] },
      { type: 'quote', text: '🗓️ Appointment Booking' },
      { type: 'paragraph', text: 'Instead of endless "What time works for you?" replies:' },
      { type: 'list', items: ['Your agent shares your calendar', 'Schedules the meeting', 'Sends reminders', 'Reschedules if needed'] },
      { type: 'paragraph', text: 'No back and forth. Just booked.' },
      { type: 'quote', text: '📦 Post Sale Follow Up' },
      { type: 'paragraph', text: 'Most businesses drop the ball after a sale. Not you.' },
      { type: 'paragraph', text: 'Your AI agent can:' },
      { type: 'list', items: ['Send onboarding docs', 'Share product access or next steps', 'Offer upsells', 'Answer common new-client questions'] },
      { type: 'quote', text: 'Focus on ROI (Not Features)' },
      { type: 'paragraph', text: 'Don’t chase fancy. Chase effective.' },
      { type: 'paragraph', text: 'Ask:' },
      { type: 'list', items: ['What takes me time daily?', 'Where do I lose leads?', 'What could someone else do if trained?'] },
      { type: 'paragraph', text: 'Then automate that part first.' },
      { type: 'quote', text: 'What Most Omniai Clients Build First' },
      { type: 'paragraph', text: 'Here’s the usual flow:' },
      { type: 'list', items: ['Lead responder', 'Booking assistant', 'CRM logger', 'Notification system'] },
      { type: 'paragraph', text: 'Each one is simple, powerful, and low risk.' },
      { type: 'quote', text: '🧠 Start Small. Scale Fast' },
      { type: 'paragraph', text: 'You don’t need the perfect AI system to begin — just one that works.' },
      { type: 'paragraph', text: 'Let’s build it together.' },
    ]
  }
];

export const getPostBySlug = (slug: string) => {
  return blogPosts.find((post) => post.slug === slug);
};

export const getPostAndNeighbors = (slug: string) => {
  const postIndex = blogPosts.findIndex((p) => p.slug === slug);

  if (postIndex === -1) {
    return { post: undefined, prevPost: undefined, nextPost: undefined };
  }

  const post = blogPosts[postIndex];
  const prevPost = postIndex > 0 ? blogPosts[postIndex - 1] : undefined;
  const nextPost = postIndex < blogPosts.length - 1 ? blogPosts[postIndex + 1] : undefined;

  return { post, prevPost, nextPost };
};

export const getAllPosts = () => {
  return blogPosts;
}
