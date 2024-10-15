import React from "react";
import p1 from "./p1.png"; // Assuming images are in the same directory
import p2 from "./p2.jpg";
import p3 from "./p3.jpg";

const SupportModule = () => {
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search resources"
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#61dafb",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Search on Google
        </button>
      </form>

      <div>
        <h4>How to Deal with Cyberbullying</h4>
        <p>
          <a
            href="https://www.talkspace.com/blog/7-ways-to-deal-with-cyberbullying/"
            target="_blank"
            rel="noreferrer"
          >
            This article explains how to handle cyberbullying situations.
          </a>
        </p>
        <img
          src={p1}
          alt="Dealing with Cyberbullying"
          style={{ maxWidth: "100%", height: "auto", marginBottom: "20px" }}
        />

        {/* Add your requested text here */}
        <p>
          When dealing with cyberbullying, the first thing to do is to stay calm
          and not exacerbate the situation by responding or fighting back
          against the attacker. You can use the blocking or reporting functions
          of the platform to block the account of the bully and report his
          misbehavior to the platform. In addition, relevant evidence, such as
          screenshots or chat records, is saved to facilitate complaints to the
          relevant authorities or platforms when needed. It's also important to
          share your feelings with a trusted friend or family member for
          emotional support.
        </p>
        <p>
          If the situation is serious, legal help can be sought, especially if
          threats or harassment are involved. Schools, communities, or online
          support groups also offer counseling and legal advice to help deal
          with the effects of cyberbullying. Most importantly, don't let
          cyberbullying affect your mental health and seek support and help.
        </p>

        <h4>Psychological Support and Resources</h4>
        <p>
          <a
            href="https://www.apa.org/topics/stress/tips"
            target="_blank"
            rel="noreferrer"
          >
            Learn how to seek psychological help and deal with stress.
          </a>
        </p>
        <img
          src={p2}
          alt="Psychological Support"
          style={{ maxWidth: "100%", height: "auto", marginBottom: "20px" }}
        />

        <p>
          When you're feeling stressed or emotionally troubled, the first thing
          you can do is talk to a trusted friend, family member, or colleague
          and express your feelings. Talking can help ease anxiety and get
          advice from a different perspective. If the problem persists, it is
          recommended to seek professional help from a counselor or
          psychologist, who can help you better understand your emotions and
          provide effective coping strategies. Many online platforms now also
          provide convenient psychological counseling services.
        </p>
        <p>
          Additionally, establishing a healthy lifestyle is essential to reduce
          stress. Keeping a regular schedule, eating a healthy diet, and
          exercising moderately will improve your overall physical and mental
          well-being. You can also practice relaxation techniques like deep
          breathing, meditation, or mindfulness to help you relax, regulate your
          mood, and ease anxiety.
        </p>
        <p>
          Finally, set your own goals and expectations reasonably to avoid
          excessive self-demands. Breaking down tasks and setting achievable
          goals can reduce your mental load and help you cope better with
          stress. It's important to seek help and focus on your mental health.
        </p>

        <h4>Support Groups</h4>
        <p>
          <a
            href="https://www.bullyzero.org.au/"
            target="_blank"
            rel="noreferrer"
          >
            Join support groups for women facing cyberbullying.
          </a>
        </p>
        <img
          src={p3}
          alt="Support Groups"
          style={{ maxWidth: "100%", height: "auto", marginBottom: "20px" }}
        />

        <h4>Educational Video on Cyberbullying</h4>
        <p>
          The impact of cyberbullying is profound and complex, and it has a
          significant negative impact on the mental health, emotional state, and
          social life of victims. Firstly, cyberbullying can cause serious
          damage to the mental health of victims. Due to the anonymity of the
          Internet, bullying is often more vicious and unending, and this
          constant attack leaves the victim in a state of long-term anxiety,
          depression and low self-esteem. Some victims may experience serious
          emotional problems, such as insomnia, bulimia or anorexia, and even
          suicidal tendencies. In particular, teenagers and psychologically
          vulnerable people are often difficult to bear huge psychological
          pressure in the face of insults, ridicule and abuse on the Internet.
          This psychological trauma may affect their daily life, study and
          future life planning, so that their self-esteem and self-confidence
          are greatly affected.
        </p>
        <p>
          Besides mental health, cyberbullying has a huge impact on victims'
          emotional and social relationships. People who have been bullied for a
          long time often feel isolated. They may not feel they have the
          understanding and support of friends or family, which can lead to
          feelings of helplessness and hopelessness. Victims usually choose to
          avoid social activities, reduce contact with others, or even
          completely withdraw from social platforms to avoid further harm. This
          withdrawal behavior causes their social circle to become narrow or
          even completely cut off from the outside world. And this sense of
          isolation not only affects their psychological state, but may also
          lead to the breakdown of interpersonal relationships, further
          exacerbating their feelings of loneliness and insecurity. Some victims
          have a fear of the social environment due to cyberbullying, which
          affects their social and professional development in real life. In
          addition, cyberbullying can have a negative impact on the victim's
          academic or work performance, and the victim's performance may decline
          due to the inability to concentrate, thus falling into a vicious
          cycle.
        </p>
        <p>
          Overall, the effects of cyberbullying are not limited to short-term
          mood swings, it can have long-term negative consequences for the
          victim's mental health, social relationships, and future life. Dealing
          with and preventing cyber bullying is an urgent problem in today's
          society, which needs more social attention and effective intervention
          measures.
        </p>
        <p>Watch this video to understand the effects of cyberbullying.</p>

        {/* Video player */}
        <div
          style={{
            position: "relative",
            paddingBottom: "56.25%",
            height: 0,
            overflow: "hidden",
            maxWidth: "100%",
            background: "#000",
          }}
        >
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/DJGTccn_8us"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <h4>Helplines for Women</h4>
        <a
          href="https://www.whv.org.au/resources/need-help-now"
          target="_blank"
          rel="noreferrer"
        >
          Call these helplines for immediate support and advice.
        </a>
      </div>
    </div>
  );
};

export default SupportModule;
