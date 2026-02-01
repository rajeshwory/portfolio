/**
 * Photo card data for the About page
 * Each card can have a single image or multiple images (carousel)
 */

export interface PhotoCardData {
  id: string;
  images: string[];
  title: string;
  description: string;
}

export const photoCards: PhotoCardData[] = [
  {
    id: "pokhara",
    images: ["/avatar.png"],
    title: "Work from Lakeside",
    description:
      "Working in the tech field and a remote job has given me a rare kind of privilege — flexibility in both time and location. Pokhara is a place I find myself returning to often, and it has quietly become part of my work rhythm. There is something deeply inspiring about brainstorming ideas with a cup of freshly brewed coffee, surrounded by the city's almost magical presence. Although it's called a city, Pokhara is nothing like what we typically imagine. Instead of noise and rush, it gently pulls you away from chaos, offering calm, soothing energy at every turn. The natural scenery only adds to its charm, constantly grounding me and sparking creativity. This moment holds a special place in my heart, because it was here that I made the decision to begin my nomadic journey.",
  },
  {
    id: "tansen",
    images: ["/tansen.jpeg"],
    title: "Work from Hills",
    description:
    "As a traveler, I had always believed that mountains held the greatest charm. Hills, in comparison, never truly caught my attention. However, at the beginning of my nomadic journey, my path led me from Pokhara to Tansen, and that belief quietly changed. Being someone who has always admired majestic mountains, I never imagined that hills could feel just as captivating—if not more. Tansen feels like it has grown naturally from the hills themselves, with the city blending seamlessly into its surroundings. Rich in culture, history, and geography, the town carries a quiet depth that reveals itself slowly. I stayed in Tansen for two nights and three days, and every moment felt warm and grounding. It was a simple yet deeply comforting experience—one that reshaped the way I see hills and left a lasting impression on my journey."
  },
  {
    id: "sauraha",
    images: ["/sauraha.jpeg", "/beach.jpeg", "/hotel.jpeg"],
    title: "Work from Beach",
    description:
    "This was my fourth visit to Sauraha, a place best known for its vast jungles and the unforgettable jungle safaris that draw travelers from all around. I still vividly remember my first visit—watching a wild rhino casually roaming through the city left me completely astonished. It was my first glimpse of how seamlessly wildlife and human civilization coexist here. Since then, I’ve made it a point to visit Sauraha at least once every year. This trip, however, felt different. It was my fourth visit as a traveler, but my first as a nomad. Until now, Sauraha had always been about adventure and exploration for me; I never imagined it could also be an ideal place for a nomadic work experience. I stayed for three days and two nights, and working from the riverside beach added a whole new dimension to my journey. The calm surroundings, paired with the rhythm of remote work, made this visit unexpectedly special and reaffirmed why the nomadic lifestyle feels so rewarding."
  },
  {
    id: "chitlang",
    images: ["/chitlang.jpeg"],
    title: "Work from Farm",
    description:
    "The nomadic experience in Chitlang truly hits different. It’s a place where village life and modern living coexist in perfect balance. While modern hotels and resorts offer comfort and convenience, traditional mud houses still stand proudly, preserving the area’s authentic rural charm. What makes Chitlang even more special is how thoughtfully modernization has been embraced. The resorts may appear contemporary, but many still grow their own vegetables and fruits, staying deeply connected to the land. Geographically, Chitlang lies just across the hills from the capital city, Kathmandu—yet it feels like a completely different world. Surrounded by eye-catching farms, lush gardens, and refreshingly clean air, the place gave me exactly what I needed: a pause from the noise of work life. It helped me reset both my mind and body, making the experience not just productive, but deeply rejuvenating—an overall rewarding chapter of my nomadic journey."
  },
  {
    id: "capital",
    images: ["/ktm.jpeg"],
    title: "Work from Capital",
    description:
    "This is where my nomadic journey came to an end. After traveling through rough highways, dense green forests, rolling hills, and towering mountains, arriving in the capital felt like stepping into an entirely different rhythm of life. Having worked as a nomad in such peaceful, serene places, I carried a quiet fear with me—that I might struggle to find inner calm in a city known for chaos. Yet, amidst the traffic and constant movement, I found a peaceful apartment tucked away in Thamel. From there, I watched life unfold as people moved steadily through their daily routines and responsibilities. It was a gentle reminder that no matter where we are, life goes on. I stayed in that apartment for a week, and what I expected to be overwhelming turned into something unexpectedly comforting. It became a memorable closing chapter—one that balanced chaos with calm and brought my nomadic journey to a thoughtful, grounding end."
  },
];
