import React, { useState } from "react";

// Predefined list of keywords to detect inappropriate language
const blacklistedKeywords = [
  "bitch",
  "shrew",
  "princess syndrome",
  "tiger mom",
  "trophy wife",
  "gold digger",
  "slut",
  "whore",
  "nagging",
  "mistress",
  "old maid",
  "sugar baby",
  "lazy woman",
  "old woman",
  "idiot",
  "moron",
  "stupid",
  "dumb",
  "fool",
  "loser",
  "scumbag",
  "jerk",
  "bastard",
  "asshole",
  "clown",
  "trash",
  "worthless",
  "dirtbag",
  "prick",
  "pussy",
  "dickhead",
  "cunt",
  "hoe",
  "racist",
  "bigot",
  "nazi",
  "terrorist",
  "redneck",
  "ghetto",
  "hillbilly",
  "savage",
  "kkk",
  "die",
  "kill",
  "burn",
  "choke",
  "strangle",
  "shoot",
  "bomb",
  "stab",
  "fat",
  "ugly",
  "disgusting",
  "pig",
  "cow",
  "freak",
  "weirdo",
  "midget",
  "retard",
  "faggot",
  "dyke",
  "queer",
  "tranny",
  "sissy",
  "homo",
  "fuck",
  "shit",
  "crap",
  "damn",
  "hell",
  "piss",
  "douche",
  "screw you",
  "suck",
  "bullshit",
  "shut up",
  "motherfucker",
];

const CommentSection = () => {
  const [comment, setComment] = useState(""); // Stores user input comment
  const [comments, setComments] = useState([]); // Stores published comments

  // Handles comment input
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  // Handles comment submission
  const handleCommentSubmit = (e) => {
    e.preventDefault();

    // Convert comment to lowercase for keyword matching
    const lowerCaseComment = comment.toLowerCase().trim();

    // Check if input is empty
    if (lowerCaseComment === "") {
      alert("Comment cannot be empty");
      return;
    }

    // Check for inappropriate language
    const containsBadWords = blacklistedKeywords.some((keyword) =>
      lowerCaseComment.includes(keyword)
    );

    if (containsBadWords) {
      // If comment contains inappropriate language, display alert and prevent submission
      alert("Inappropriate language detected, comment was not posted.");
    } else {
      // If comment passes the check, publish the comment
      setComments([...comments, comment]);
      alert("Comment successfully posted.");
    }

    // Clear the input field
    setComment("");
  };

  // Handles deleting a comment by index
  const handleDeleteComment = (indexToDelete) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this comment?"
    );
    if (confirmDelete) {
      setComments(comments.filter((_, index) => index !== indexToDelete));
    }
  };

  return (
    <div>
      {/* Software Introduction and Impact */}
      <div
        style={{
          padding: "20px",
          backgroundColor: "#f4f4f9",
          marginBottom: "20px",
          marginRight: "20px", // Add margin on the right to prevent touching the right content
        }}
      >
        <h2>Website Introduction</h2>
        <p>
          This website is our actual product, the Great Wall webpage is a
          webpage specifically designed to address gender bias in the online
          environment, aiming to create a safer, friendly and inclusive online
          space for female users. The software has advanced content management
          functions such as black and white list control, text blocking, and
          emotion regulation, which can effectively identify and filter harmful
          comments and prevent cyberbullying behavior. The software provides
          psychological support to adjust the content received by the user in
          different emotional states, while also integrating privacy protection
          features to ensure the security of user data. Great Wall Software also
          introduced third-party integration to enhance the user experience,
          promote knowledge sharing and interaction among women, and help users
          form a closer community.
        </p>
        <h2>The Function of Product</h2>
        <p>
          The core function of The Great Wall software is not limited to pure
          content filtering and security guarantee, but it also provides
          psychological counseling and emotional support for women through a
          series of innovative functions to encourage them to express their
          thoughts and opinions in a safe environment. The significance of the
          software is that it can help users automatically detect and block
          potentially harmful comments on the Internet and prevent online
          violence from harming their mental health, especially in the current
          environment of inappropriate comments on social media, where women's
          safety and mental health are particularly important.
        </p>
       
        <h2>Impact</h2>
        <p>
          The emergence of The Great Wall Software fills the gap in the market
          specifically addressing women's cybersecurity issues, creating a
          female-centered interactive community that encourages them to speak
          freely in a safe environment, share their experiences, and reduce
          feelings of isolation and alienation. This kind of targeted design not
          only increases user engagement with the app, but also increases their
          trust in the platform. By improving the security of social media,
          Great Wall Software reduces the frequency of network violence, thus
          having a positive impact on the overall network ecology.
        </p>
        <h2>Annotation </h2>
        <p>
          The Great Wall Software demo showcases its advanced filtering system,
          designed to detect and block hateful content in real-time. Using
          blacklist/whitelist controls, it screens out offensive language and
          adapts to new harmful speech patterns. The platform enhances user
          safety by filtering inappropriate messages before they reach the user,
          while also incorporating emotional regulation tools and feedback to
          improve its accuracy over time.
        </p>
      </div>

      {/* Move Comment Section here */}
      <form onSubmit={handleCommentSubmit}>
        <textarea
          value={comment}
          onChange={handleCommentChange}
          placeholder="Enter your comment"
          rows="4"
          style={{
            width: "94%", // Input width remains 85%
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "5px",
          }}
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
          Submit Comment
        </button>
      </form>
      <div>
        <h3>Published Comments</h3>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {comments.map((c, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px",
                margin: "5px 0",
                backgroundColor: "#f9f9f9",
                borderRadius: "5px",
                boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
                maxWidth: "80%", // 设置最大宽度为 80%
                wordWrap: "break-word", // 自动换行
                wordBreak: "break-all", // 强制换行，防止溢出
              }}
            >
              <span>{c}</span>
              <button
                onClick={() => handleDeleteComment(index)}
                style={{
                  backgroundColor: "#ff4d4d",
                  border: "none",
                  color: "white",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommentSection;
