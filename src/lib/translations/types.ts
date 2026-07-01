/** Shape of every translation file — must be identical across en / bn / hi. */
export type Translations = {
  locale: "en" | "bn" | "hi";

  nav: {
    home: string;
    about: string;
    blog: string;
    projects: string;
    contact: string;
    resume: string;
    getInTouch: string;
  };

  footer: {
    site: string;
    writing: string;
    connect: string;
    watching: string;
    rights: string;
  };

  home: {
    heroTitle: string;
    heroBody: string;
    ctaBuild: string;
    ctaBlog: string;
    introBody: string;
    todayNote: string;
    recentTitle: string;
    allWriting: string;
    readMore: string;
    notesLabel: string;
    tagline: string;
    moods: string[];
  };

  about: {
    title: string;
    intro: string;
    body: string;
    nowTitle: string;
    nowSubtitle: string;
    nowDoing: string[];
    watchingLink: string;
    watchingLinkLabel: string;
    closingLine: string;
    closingProjects: string;
    closingBlog: string;
  };

  blog: {
    title: string;
    description: string;
    newLabel: string;
  };

  projects: {
    title: string;
    description: string;
    liveLabel: string;
    inProgress: string;
    projects: Array<{
      name: string;
      description: string;
      tags: string[];
      href?: string;
      muted?: boolean;
    }>;
  };

  watching: {
    title: string;
    description: string;
    intro: string;
    lastUpdated: string;
    recommendation: string;
    recommendationLink: string;
    sections: Array<{
      category: string;
      items: Array<{ title: string; year: string; note: string }>;
    }>;
  };

  contact: {
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    send: string;
    sending: string;
    successTitle: string;
    orLabel: string;
    emailDirect: string;
    errorFill: string;
    errorGeneric: string;
  };

  notFound: {
    emoji: string;
    title: string;
    body: string;
    cta: string;
  };

  langSwitcher: {
    auto: string;
  };
};
