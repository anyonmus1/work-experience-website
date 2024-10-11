import React from 'react';

const characters = [
    {
        name: "Character 1",
        image: "./Assets/images/character1.png",
        description: "This is character 1, the leader of the army!"
    },
    {
        name: "Character 2",
        image: "./Assets/images/character2.png",
        description: "This is character 2, the strategist of the group!"
    },
    {
        name: "Character 3",
        image: "./Assets/images/character3.png",
        description: "This is character 3, the tech wizard of the team!"
    },
    {
        name: "Character 4",
        image: "./Assets/images/character4.png",
        description: "This is character 4, the meme master extraordinaire!"
    },
    {
        name: "Character 5",
        image: "./Assets/images/character5.png",
        description: "This is character 5, the community champion!"
    }
];

function Characters() {
  const styles = {
    characters: {
      paddingTop: '80px',
      backgroundColor: '#116466',
      color: '#D1E8E2',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    },
    hero: {
      textAlign: 'center',
      padding: '4rem 2rem',
      background: 'linear-gradient(rgba(13, 24, 29, 0.7), rgba(17, 100, 102, 0.7))',
      backgroundImage: 'url("/path/to/your/characters-hero-image.jpg")',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    },
    heroTitle: {
      fontSize: '3rem',
      marginBottom: '1rem',
      color: '#FFCB9A',
    },
    heroText: {
      fontSize: '1.2rem',
      marginBottom: '2rem',
      maxWidth: '800px',
      margin: '0 auto',
    },
    content: {
      padding: '4rem 2rem',
      backgroundColor: '#0D181D',
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    charactersGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
      maxWidth: '1200px',
      width: '100%',
      justifyContent: 'center',
    },
    characterCard: {
      backgroundColor: '#116466',
      borderRadius: '10px',
      padding: '1.5rem',
      textAlign: 'center',
      transition: 'transform 0.3s ease',
    },
    characterImage: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
      borderRadius: '5px',
      marginBottom: '1rem',
    },
    characterName: {
      fontSize: '1.5rem',
      color: '#FFCB9A',
      marginBottom: '0.5rem',
    },
    characterDescription: {
      fontSize: '1rem',
      color: '#D1E8E2',
    },
  };

  return (
    <div style={styles.characters}>
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>Meet the Army!</h1>
        <p style={styles.heroText}>
          Get to know the quirky and powerful characters behind [Your Meme Coin Name]. 
          Each one brings their unique skills and humor to our crypto adventure!
        </p>
      </div>
      <div style={styles.content}>
        <div style={styles.charactersGrid}>
          {characters.map((character, index) => (
            <div key={index} style={styles.characterCard}>
              <img src={character.image} alt={character.name} style={styles.characterImage} />
              <h3 style={styles.characterName}>{character.name}</h3>
              <p style={styles.characterDescription}>{character.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Characters;