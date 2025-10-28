export interface Story {
  id: string;
  title: string;
  coverImage: string;
  pages: {
    text: string;
    image?: string;
  }[];
  ageRange: string;
  description: string;
}

export const stories: Story[] = [
  {
    id: "little-adventurer",
    title: "The Little Adventurer",
    coverImage: "https://images.unsplash.com/photo-1579539447503-ec82f0aab843?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGFkdmVudHVyZSUyMGJvb2slMjBpbGx1c3RyYXRpb258ZW58MXx8fHwxNzU3OTQ5MjU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ageRange: "4-8 years",
    description: "Join Sam on an exciting adventure through the magical forest!",
    pages: [
      {
        text: "Once upon a time, there was a brave little adventurer named Sam. Sam loved exploring new places and meeting new friends.",
        image: "https://images.unsplash.com/photo-1579539447503-ec82f0aab843?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGFkdmVudHVyZSUyMGJvb2slMjBpbGx1c3RyYXRpb258ZW58MXx8fHwxNzU3OTQ5MjU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        text: "One sunny morning, Sam packed a backpack with snacks and water, and set off into the enchanted forest behind their house."
      },
      {
        text: "In the forest, Sam met a wise old owl who said, 'Follow the golden path, and you'll find something wonderful!'"
      },
      {
        text: "Sam followed the sparkling golden path through tall trees and beautiful flowers, getting more excited with each step."
      },
      {
        text: "At the end of the path, Sam discovered a clearing filled with friendly forest animals having a tea party! They invited Sam to join them, and they all became the best of friends."
      },
      {
        text: "From that day on, Sam visited the forest friends every week, and they had many more adventures together. The End."
      }
    ]
  },
  {
    id: "magic-garden",
    title: "The Magic Garden",
    coverImage: "https://images.unsplash.com/photo-1582711680876-b81513ee7ac5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWdpY2FsJTIwZ2FyZGVuJTIwY2hpbGRyZW4lMjBzdG9yeXxlbnwxfHx8fDE3NTc5NDkyNTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ageRange: "3-7 years",
    description: "Discover the secrets of a magical garden where flowers sing and dance!",
    pages: [
      {
        text: "Emma found a secret door hidden behind the ivy in her grandmother's garden. When she opened it, she gasped in wonder!",
        image: "https://images.unsplash.com/photo-1582711680876-b81513ee7ac5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWdpY2FsJTIwZ2FyZGVuJTIwY2hpbGRyZW4lMjBzdG9yeXxlbnwxfHx8fDE3NTc5NDkyNTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        text: "Inside was the most beautiful garden she had ever seen, with flowers that sparkled like jewels and trees that hummed gentle melodies."
      },
      {
        text: "As Emma walked through the garden, the flowers began to sing in harmony, and butterflies danced around her in colorful spirals."
      },
      {
        text: "A friendly sunflower bent down and whispered, 'Welcome to the Magic Garden, Emma! We've been waiting for someone special like you.'"
      },
      {
        text: "Emma spent the whole afternoon playing with the singing flowers and dancing butterflies, learning that kindness makes everything more magical."
      },
      {
        text: "When it was time to go, the flowers gave Emma a special seed. 'Plant this in your own garden,' they said, 'and the magic will grow wherever you are!' The End."
      }
    ]
  },
  {
    id: "friendly-dragon",
    title: "The Friendly Dragon",
    coverImage: "https://images.unsplash.com/photo-1610308700652-d931026f7eec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRseSUyMGRyYWdvbiUyMGNoaWxkcmVuJTIwYm9va3xlbnwxfHx8fDE3NTc5NDkyNTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ageRange: "5-9 years",
    description: "Meet Spark, a gentle dragon who just wants to make friends!",
    pages: [
      {
        text: "High up in the mountains lived a young dragon named Spark. Unlike other dragons, Spark didn't want to frighten anyone - he just wanted to make friends!",
        image: "https://images.unsplash.com/photo-1610308700652-d931026f7eec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRseSUyMGRyYWdvbiUyMGNoaWxkcmVuJTIwYm9va3xlbnwxfHx8fDE3NTc5NDkyNTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        text: "Spark was very lonely because whenever he tried to say hello, people would run away. They were scared of his big size and his fire breath."
      },
      {
        text: "One day, Spark saw a village where all the ovens had broken down. The bakers couldn't bake bread, and everyone was hungry."
      },
      {
        text: "Spark had an idea! He flew down gently and offered to help. With his warm fire breath, he could bake all the bread the village needed."
      },
      {
        text: "The villagers were amazed at how kind and helpful Spark was. Soon, children were riding on his back and adults were sharing stories with him."
      },
      {
        text: "From that day forward, Spark was the village's best friend. He helped with cooking, gave flying rides, and proved that being different makes you special! The End."
      }
    ]
  },
  {
    id: "space-journey",
    title: "The Space Journey",
    coverImage: "https://images.unsplash.com/photo-1611462985358-60d3498e0364?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMGFkdmVudHVyZSUyMGNoaWxkcmVuJTIwc3Rvcnl8ZW58MXx8fHwxNzU3OTQ5MjU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ageRange: "6-10 years",
    description: "Blast off with Luna on an incredible adventure through the stars!",
    pages: [
      {
        text: "Luna dreamed of being an astronaut every single night. She built rockets out of cardboard boxes and pretended to fly to the moon.",
        image: "https://images.unsplash.com/photo-1611462985358-60d3498e0364?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMGFkdmVudHVyZSUyMGNoaWxkcmVuJTIwc3Rvcnl8ZW58MXx8fHwxNzU3OTQ5MjU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        text: "One night, a real spaceship landed in Luna's backyard! A friendly alien named Zorp peeked out and said, 'Want to see the universe, Luna?'"
      },
      {
        text: "Luna couldn't believe it was real! She put on the special space helmet Zorp gave her and climbed aboard the shimmering silver spaceship."
      },
      {
        text: "They zoomed past twinkling stars, danced around Saturn's rings, and visited a planet where everything was made of ice cream!"
      },
      {
        text: "On the ice cream planet, Luna met alien children who loved to play the same games she did. They had a wonderful time playing space tag among the rainbow clouds."
      },
      {
        text: "When it was time to go home, Zorp gave Luna a star-shaped pendant. 'This will remind you that the universe is full of friends waiting to meet you!' Now Luna knew her dreams could really come true. The End."
      }
    ]
  }
];