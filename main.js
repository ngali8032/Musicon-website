// public/main.js
document.addEventListener('DOMContentLoaded', () => {
    const context = {
      title: 'Welcome to Musicon',
      body: 'Musicon is a budding musical storefront with a mission to share the joy of music. These magnificent auditory tools are designed with musical creators, like you, in mind. Hobbyists, beginners, and experts alike can appreciate the resplendent sounds supplied by each and every instrument we carry. Join us in delivering the euphoric vibrations of melodia to the citizens of the world!',
      instruments: [
        {
          image: 'https://s3.amazonaws.com/codecademy-content/courses/learn-handlebars/musicon/electronic-keyboard.png',
          name: 'Electronic Keyboard',
          description: 'A piano welcomed to the 21th century. Pianists celebrate the compact form factor and the diversity of synthesized rhythms all in one masterful musical machine.',
          price: '₹1,99,999.00',
          sale: '₹1,69,999.00'
        },
        {
          image: 'https://s3.amazonaws.com/codecademy-content/courses/learn-handlebars/musicon/electric-guitar.png',
          name: 'Electric Guitar',
          description: 'Join the legends of the \'50s and \'60s when the marriage of guitar and electricity created the most influential instrument of a generation. Note: picks sold separately.',
          price: '₹49,999.00'
        },
        {
          image: 'https://s3.amazonaws.com/codecademy-content/courses/learn-handlebars/musicon/bass-guitar.png',
          name: 'Bass Guitar',
          description: 'Experience the embodiment of funkadelic frequencies that is the bass guitar. Let the deep low notes of the bass guitar resonate with heartbeats everywhere.',
          price: '₹52,999.00'
        },
        {
          image: 'https://s3.amazonaws.com/codecademy-content/courses/learn-handlebars/musicon/drum-kit.png',
          name: 'Drum Kit',
          description: 'Ever thought, "one instrument isn\'t enough?" Find an answer in the drum kit. Coordinate a collections of drums and cymbals to dictate the rhythm of musical masterpiece.',
          price: '₹54,999.00',
          sale: '₹29,999.00'
        },
        {
          image: 'https://s3.amazonaws.com/codecademy-content/courses/learn-handlebars/musicon/violin.png',
          name: 'Violin',
          description: 'A versatile that is suited for any and all occasions. Those wearing tuxedos can strum together a classic. Others who prefer overalls can call it a fiddle and play some folk songs.',
          price: '₹18,999.00'
        }
      ]
    };
  
    // Populate Home Page
    if (document.getElementById('introduction')) {
      const introHtml = `
        <h1>${context.title}</h1>
        <p>${context.body}</p>
      `;
      document.getElementById('introduction').innerHTML = introHtml;
    }
  
    // Populate Store Page
    if (document.getElementById('showcase')) {
      const instrumentsHtml = context.instruments.map(instrument => `
        <article class="instrument">
          <img class="image" src="${instrument.image}" alt="${instrument.name}">
          <section class="details">
            <h2 class="name">${instrument.name}</h2>
            <p class="description">${instrument.description}</p>
            ${instrument.sale ? `
              <p class="price"><del>Price: ${instrument.price}</del></p>
              <p class="sale">On Sale! ${instrument.sale}</p>
            ` : `
              <p class="price">Price: ${instrument.price}</p>
            `}
          </section>
        </article>
      `).join('');
      document.getElementById('showcase').innerHTML = instrumentsHtml;
    }
  });
  