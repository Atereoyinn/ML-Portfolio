const serviceID = process.env.SERVICE_ID;

const templateID = process.env.TEMPLATE_ID;

const userID = process.env.USER_ID

const logotext = "ATEREOYIN";

const meta = {
    title: "Ayuba Abiola",
    description: "I’m Ayuba Abiola,an AI Engineer, a Data scientist and a Frontend Developer,currently looking for opportunities to collaborate in the field of Machine learning, Deep learning, and  Software development. I am based in The United kingdom",
};

const introdata = {
    title: "I’m Ayuba Abiola",
    animated: {
        first: "I cherish data insights, guiding decisions and sparking innovation.",
        second: "I write clean code with seamless functionality for sleek websites.",
        third: "I build working machine learning models that deliver results.",
    },
    description: "I’m Ayuba Abiola,an AI Engineer, a Data scientist and a Frontend Developer,currently looking for opportunities to collaborate in the field of Machine learning, Deep learning, and  Software development. I am based in The United kingdom",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "A bit about Myself",
    aboutme: {
        "intro": "Hello! I'm Ayuba Abiola, a versatile professional navigating the exciting intersections of AI Engineering, Data Science, and Software Development. With a passion for leveraging technology to drive innovation and solve real-world challenges, I thrive in dynamic environments where creativity meets cutting-edge solutions.",
        "aiEnthusiast": "Whether it's crafting intelligent algorithms or diving deep into data analytics, I'm dedicated to pushing the boundaries of what's possible in the field of AI. With a passion for innovation and problem-solving, I'm committed to leveraging technology to drive positive impact. My ability to analyze complex data and develop robust solutions showcases my expertise in harnessing the power of AI to address real-world challenges effectively.",
        "codeConnoisseur": "With a knack for writing clean and functional code, I bring ideas to life through sleek and responsive websites. From optimizing web pages for speed and scalability to building reusable React components, I'm driven by a relentless pursuit of excellence in frontend development.",
        "leaderCollaborator": "Beyond technical expertise, I thrive in fostering collaboration and driving results. My leadership extends beyond technical domains, as I excel in enhancing team productivity through agile methodologies and facilitating effective communication."
      }
};

const worktimeline = [{
        jobtitle: "Designer of week",
        where: "YAdfi",
        date: "2020",
    },
    {
        jobtitle: "Designer of week",
        where: "Jamalya",
        date: "2019",
    },
    {
        jobtitle: "Designer of week",
        where: "ALquds",
        date: "2019",
    },
];

const skills = [{
        name: "Python",
        value: 75,
    },
    {
        name: "SQL",
        value: 75,
    },
    {
        name: "Tensorflow",
        value: 80,
    },
    {
        name: "LangChain",
        value: 70,
    },
    {
        name: "JavaScript",
        value: 80,
    },
    {
        name: "React",
        value: 80,
    }
];

const services = [
    {
        title: "AI Engineering & Data Science",
        description: "Experienced AI Engineer and Data Scientist with a robust background in leveraging Python for advanced AI and machine learning projects. Proficient in developing, evaluating, and enhancing AI models using tools like TensorFlow, Keras, and LangChain. Passionate about delivering high-impact results in dynamic and innovative environments."
    },
    {
        title: "Front-End Software Development",
        description: "Skilled Frontend Software Developer with a track record of enhancing user engagement through responsive designs and optimizing web pages for speed and scalability. Experienced in building reusable React components and libraries, and implementing agile methodologies to improve project delivery timelines and productivity."
    },
    {
        title: "IT Specialist & Data Analysis",
        description: "Proficient IT Specialist with significant experience in performing assigned operations, troubleshooting network, electrical, and mechanical issues, and developing documentation processes. Skilled in data analysis with a focus on increasing data accuracy and reliability, and presenting insights using visualization tools like Power BI."
    }
];


const dataportfolio = [{
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/800/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/550/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "abiolaayubam@gmail.com",
    YOUR_FONE: "+447407051295",
    description: "Feel free to get in touch with me for any inquiries, collaboration opportunities, or just to say hello. I am always open to discussing new projects, creative ideas, or potential collaborations. Let's connect and create something amazing together!",
    // create an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: serviceID,
    YOUR_TEMPLATE_ID: templateID,
    YOUR_USER_ID: userID,
};

const socialprofils = {
    github: "https://github.com/atereoyinn",
    facebook: "https://www.facebook.com/Atereoyin",
    linkedin: "https://www.linkedin.com/in/ayubaabiola",
    twitter: "https://x.com/AtereOyin?t=VTtWVmtw8SKtYaOlTVhG_A&s=08",
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};