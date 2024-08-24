export default {
    HOME: {text:'About', ref: 'about', disabled: false},
    GALLARY: {text:'Gallary', ref: 'gallary',  disabled: false},
    MONTHLY: {text:'Reports', ref: 'monthly',  disabled: false},
    EVENTS: {text:'Events', ref: 'events',  disabled: true},
    CONTACT: {text:'contact us', ref: 'contact'},
    CERTIFICATES: {text:'certificates', ref: 'certificates'}

}

export const contactDetails = {
    email: 'Angelswithpaws.ngo@gmail.com',
    address: 'SY NO 25/3, Taluk, Kalanayakakanahalli Village, Kasaba Hobli, Anekal, Telagarahalli, Karnataka 562106',
    phone: '+91 9845101180',
    addresslink: 'https://g.co/kgs/eD7QkxN',
    instagram: 'https://www.instagram.com/angelswithpaws.bangalore?igsh=MXZoZjVmbG8xcHg4aw==https://www.instagram.com/angelswithpaws.bangalore?igsh=MXZoZjVmbG8xcHg4aw==',
    facebook: 'https://www.facebook.com/share/79Rm4GALxXNeskTE/?mibextid=qi2Omg',
    whatsapp: 'https://wa.me/+919845101180',
}

export const dogStories = [
    {
      title: 'Khushi',
      image:  `${process.env.PUBLIC_URL}/stories/Khushi.jpeg`,
      description: 'Known as the “Mini siren”, Khushi has come a long way from when she was left in a bag near our gate. Although she could barely walk in the beginning, she now loves to chase the others and ends up inviting trouble for herself😊',
    },
    {
      title: 'Goldie',
      image: `${process.env.PUBLIC_URL}/stories/Goldie.jpeg`,
      description: `Fondly known as our “Miracle baby”, she survived after being bitten by a cobra. Despite the experience, she continues to chase and hunt snakes/ frogs/ whatever her eyes and nose can find.
      She is one of the bravest girls who was picked up near our apartment as another pack of dogs had started invading the area where she lived.
      She is a friendly and chirpy angel of ours.`},
    {
      title: 'Johnny',
      image: `${process.env.PUBLIC_URL}/stories/Jonny.jpeg`,
      description: `
      The most handsome of the lot, Johnny loves humans and is fondly called the “Poser” as he loves the camera. From almost being abandoned , to coming to the the home, his journey has been an amazing one😊
      `
    },
    {
      title: 'Zack',
      image: `${process.env.PUBLIC_URL}/stories/Zack.jpeg`,
      description: `
      He has a zero tolerance policy for the dogs he doesn’t like..even when they cross his path, he continues to growl and bark at them.
      He was found walking alone on a busy road, as a small pup. He loves to tease and doesn’t like new people. 
      `
    },
    // Add more stories here
  ];