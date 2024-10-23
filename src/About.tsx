import Reveal from "./Reveal";

export default function About({ sectionRef }) {
  return (
    <div className="p-6 bg-gray-100 ml-60 h-screen" id="about" ref={sectionRef}>
      <h1 className="text-3xl font-bold mb-4">About Run-Nest</h1>
      <Reveal>
        <p className="mb-4">
          Founded in 2021, Run-Nest emerged from a shared passion for running
          and technology. The company's founders, Sarah Thompson, a marathon
          enthusiast and software engineer, and Jake Martinez, a fitness coach
          and data analyst, envisioned a platform that would revolutionize the
          way runners track their progress and engage with the running
          community.
        </p>
      </Reveal>
      <Reveal>
        <p className="mb-4">
          The idea sparked during a casual run in Central Park, where Sarah and
          Jake noticed the lack of tools that combined social interaction with
          personalized training plans. They believed that every runner,
          regardless of their skill level, should have access to tailored
          coaching and the support of a community. With this vision, they
          gathered a small team of like-minded individuals who shared their
          passion for running and innovation.
        </p>
      </Reveal>
      <Reveal>
        <p className="mb-4">
          Run-Nest's first product was a mobile app that utilized AI to create
          customized training plans based on individual fitness levels, goals,
          and preferences. The app quickly gained traction among local running
          clubs and online communities, leading to partnerships with major
          running events and brands.
        </p>
      </Reveal>
      <Reveal>
        <h2 className="text-2xl font-bold mb-2">Meet Our Team</h2>
      </Reveal>
      <Reveal>
        <div className="flex flex-wrap">
          <div className="w-1/2 p-4">
            <h3 className="font-semibold">Sarah Thompson</h3>
            <p className="text-sm">Co-Founder & CEO</p>
            <p>
              With a decade of experience in software development and a passion
              for long-distance running, Sarah leads the vision and direction of
              Run-Nest, ensuring that technology and user experience remain at
              the forefront of the company's mission.
            </p>
          </div>
          <div className="w-1/2 p-4">
            <h3 className="font-semibold">Jake Martinez</h3>
            <p className="text-sm">Co-Founder & Head Coach</p>
            <p>
              As a certified fitness coach, Jake brings invaluable insights into
              training methodologies and community building. He oversees the
              coaching features of the app and ensures users receive the best
              support possible.
            </p>
          </div>
          <div className="w-1/2 p-4">
            <h3 className="font-semibold">Emily Chen</h3>
            <p className="text-sm">Chief Technology Officer</p>
            <p>
              Emily, a former competitive runner and software engineer, leads
              the tech team at Run-Nest. She is dedicated to leveraging AI and
              machine learning to improve user experience and training outcomes.
            </p>
          </div>
          <div className="w-1/2 p-4">
            <h3 className="font-semibold">Michael Davis</h3>
            <p className="text-sm">Community Engagement Director</p>
            <p>
              With a background in community organizing and event planning,
              Michael is responsible for building partnerships with running
              clubs and organizing local events to foster a sense of community
              among Run-Nest users.
            </p>
          </div>
        </div>
        <p className="mt-6">
          At Run-Nest, we believe that every step counts, and our mission is to
          empower runners to reach their full potential. Join us on our journey
          as we continue to innovate and support the global running community!
        </p>
      </Reveal>
    </div>
  );
}
