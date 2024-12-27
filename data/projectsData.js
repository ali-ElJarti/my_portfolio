const projectsData = [
    {
      id: "3d-modeling",
      title: "3D Modeling",
      description: "Design and 3D Modeling of a Track Vehicle with SolidWorks.",
      img: "/img/chenille.jpeg",
      pdf: "/pdf/2D_Designs.pdf",
      video: "https://www.youtube.com/watch?v=2kxU8-PdN5M",
    },
    {
      id: "scada-supervision",
      title: "Supervision Web App (Ignition)",
      description:
        "This project focuses on the development of a SCADA supervision web application to monitor and control industrial processes in real time. Built using the Ignition platform, the system integrates interactive dashboards, dynamic parameter tracking, and efficient alarm configurations. Key functionalities include the visualization of critical parameters such as temperature and reactor levels, the configuration of alarms for safety thresholds, and seamless integration with OPC UA and MQTT protocols. " +
        "Additionally, the system incorporates Unity VR for immersive 3D visualizations, enabling operators to interact with simulated equipment in real-time, including valve and pump controls. Data storage was achieved using both MySQL and SQLite databases for optimal performance and long-term traceability. The project showcases the powerful capabilities of Ignition in delivering a modular, scalable, and user-friendly SCADA solution for modern industrial supervision.",
      img: "/img/scada.jpg",
      pdf: "/pdf/projet_scada.pdf",
      video: "https://www.youtube.com/watch?v=9KniKnjccM8",
    },
    {
        id: "arena-simulation",
        title: "Visualization of Simulation Data in Grafana (Arena)",
        description:
          "This project involves visualizing simulation data generated in Arena through Grafana dashboards. The system architecture integrates Arena for modeling, Microsoft Access for data storage, and MySQL for database management. Data is synchronized to Grafana every 5 seconds, allowing real-time monitoring of critical parameters. The dashboard displays dynamic insights into machine statuses, production outputs, and operational performance, offering comprehensive analysis and decision support.",
        img: "/img/Arena_Project.png",
        pdf: "/pdf/PROJET_ARENA_TIUF.pdf",
        video: "https://www.youtube.com/watch?v=ceonmVtF3K4",
      },

      {
        id: "water-station-supervision",
        title: "water-station-supervision",
        description:
          "This project focuses on developing a supervision application for a water treatment station (reservoir section) integrated with KepserverEx using Basic256sha256 security protocols. The system leverages real-time 3D simulation and a GEMMA-based study to enhance operational visibility and control. Key features include real-time monitoring of reservoir parameters, secure integration with OPC UA for seamless data exchange, and the use of advanced encryption protocols to ensure data security. The 3D simulation provides an interactive visual representation of the system, allowing operators to intuitively monitor and manage water levels, valve operations, and flow rates. Additionally, the GEMMA methodology was employed to optimize process design and enhance overall system performance. This project showcases the potential of integrating secure SCADA systems with advanced visualization techniques to achieve efficient and reliable water treatment operations.",
        img: "/img/waterstation.png",
        video: "https://www.youtube.com/watch?v=6A-_wFEYZnI",
    },


    {
        id: "vr-hse-training",
        title: "Virtual Reality Application for HSE and Maintenance Training",
        description:
          "This project involves the development of a virtual reality (VR) application designed to enhance Health, Safety, and Environment (HSE) and maintenance training. Built using Unity 3D and Blender, the application provides immersive training scenarios that simulate real-world industrial environments. The system integrates SQLite3 for storing training progress and results, the OPC UA plugin for seamless communication with industrial systems, and C++ scripting to enable dynamic and interactive training modules. Key features include realistic 3D environments for training, intuitive operator interactions, and real-time data exchange with industrial equipment. The VR application aims to improve operator safety, enhance skills, and reduce risks in complex industrial settings by delivering hands-on training in a safe and controlled virtual space.",
        img: "/img/Unity_game.png",
        video: "https://www.youtube.com/watch?v=6QG6KVjJrgE",
    },
    
    
  ];
  
  export default projectsData;
  