import React, { useState } from 'react';
import { Mail, Github, Linkedin, Twitter, Rss, Sun, Moon, ExternalLink, Instagram, Music } from 'lucide-react';
import { FaSpotify } from 'react-icons/fa';
function App() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const themeClasses = isDark 
    ? 'bg-[#1c1c1d] text-gray-100' 
    : 'bg-gray-50 text-gray-900';

  const accentColor = 'text-cyan-400';
  const linkColor = isDark ? 'text-cyan-400 hover:text-cyan-300' : 'text-cyan-600 hover:text-cyan-500';

  return (
    <div className={`min-h-screen ${themeClasses} transition-colors duration-300`}>
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <div></div>
        <div className="flex items-center space-x-8">
          <a href="#about" className={`${linkColor} transition-colors`}>About</a>
          <a href="#blog" className={`${isDark ? 'text-gray-300 hover:text-gray-100' : 'text-gray-700 hover:text-gray-900'} transition-colors`}>Blog</a>
          <a href="#cv" className={`${isDark ? 'text-gray-300 hover:text-gray-100' : 'text-gray-700 hover:text-gray-900'} transition-colors`}>CV</a>
          <a href="#projects" className={`${isDark ? 'text-gray-300 hover:text-gray-100' : 'text-gray-700 hover:text-gray-900'} transition-colors`}>Projects</a>
          <a href="#publications" className={`${isDark ? 'text-gray-300 hover:text-gray-100' : 'text-gray-700 hover:text-gray-900'} transition-colors`}>Publications</a>
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-lg ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-200'} transition-colors`}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-8 py-16">
        <div className=" ">
          <div className="">
            <h1 className="text-[2.7em] font-bold mb-4">
              Saket Ram <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Bandi</span>
            </h1>
            <h4 className={`${accentColor} text-[0.9em] italic mb-8`}>
              "Research at Microsoft Research, Contributing to Low-Level NumPy Enhancements"
            </h4>
            
            <div className="space-y-6 text-[0.995em] font-light leading-relaxed">
            <img 
              src="show_2.jpg" 
              alt="Swayam Singh"
              className="w-1/3 h-1/4 float-right ml-6 mb-4 rounded-lg shadow-lg"
            />
              <p>
              Hello, Internet wanderer! I’m Saket Ram Bandi, a machine learning enthusiast, 
              musician, and part-time time traveler (only in Dark reruns — no loopholes exploited... yet). 
                <span className="">
           
          </span>
              </p>

              <p> </p>
              
              
              
            </div>
            <div className=" w- full space-y-6 text-[0.995em] font-light leading-relaxed">
            <p >
            No, I haven’t received my Hogwarts letter either, but if Hogwarts offered a course 
            on Transformers and Attention Mechanisms, I'd have topped it without a wand. I’ve spent 
            the past few years diving deep into the magical realms of Machine Learning, Natural Language Processing, 
            and Computer Vision — working on everything from building GPT-style models from scratch to enhancing underwater images with VAEs.

            On the professional front, I’ve played multiple roles: Research Intern (AI), Machine Learning Engineer, Mentor, 
            and Builder of Everything From Scratch™. I’ve trained models that generate poetry and presentations, taught juniors 
            the difference between precision and recall (with real-world intuition), and explored knowledge graphs to make financial 
            language models more intelligent. My projects span across domains — image captioning, time series prediction for day trading, 
            neural attention networks, and building RAG systems based on Harry Potter lore (yes, it understands the Marauder’s Map references).

            <span className="">
           
          </span>
              </p>

              
            <p></p>
            </div>

            <div className=" w- full space-y-6 text-[0.995em] font-light leading-relaxed">
            <p >
            If there's one constant in my journey, it's curiosity — the kind that leads to training a GPT just to understand 
            how it completes lines of Shakespeare or how a stock’s sentiment flows through a news report like DRS through 
            a hairpin corner in F1.
            

            <p></p>
            
              </p>
            </div>


            

            <div className="mt-12 ">
              <h3 className="text-2xl font-normal mb-6">Hobbies & Fun Bits</h3>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start font-light text-[0.995em]">
                  <span className="mr-3">🪄</span>
                  <span> Harry Potter isn’t just a book series — it’s a blueprint for life. I still argue over Snape’s redemption arc and dream of coding in the Room of Requirement.</span>
                </li>
                <li className="flex items-start text-[0.995em]">
                  <span className="mr-3">🕰️</span>
                  <span> Dark broke my brain and rebuilt it. The loops, the logic, the layers — much like a recursive neural net with German accents.</span>
                </li>
                <li className="flex items-start text-[0.995em]">
                  <span className="mr-3">🏎️</span>
                  <span>Formula 1? My weekends revolve around tyre strategy, telemetry data, and whether Lando finally gets that win.</span>
                </li>
              </ul>
            </div>
          </div>

         
        </div>

        <div className="mt-16">
          <p className="text-lg leading-relaxed font-light text-[0.995em]">
          From spell-checking Spells to debugging Transformer heads, I’m constantly evolving — learning, building, and occasionally breaking things (for science!). Whether you're here for tech, tales, or a time-traveling adventure through code, I’m always game.
          </p>
          <p className="text-lg leading-relaxed font-light mt-6 text-[0.995em]">
          So buckle up — we’re not just taking a Sunday drive. This is a full-throttle pursuit at the intersection of science, speed, and machine learning. Who knows? Maybe one day we’ll cross the finish line with the Grand Prix equivalent of the Philosopher’s Stone — fast, flawless, and engineered to perfection.
          </p>
        </div>
      </section>

      {/* News Section */}
      <section className="max-w-4xl mx-auto px-8 py-16">
        <h2 className="text-4xl font-bold mb-12">News</h2>
        <div className="space-y-8">
          {/* <div className="flex gap-8">
            <div className="text-right min-w-[120px]">
              <p className={`font-semibold ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Jul 4,</p>
              <p className={`font-semibold ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>2024</p>
            </div>
            <div className="flex-1">
              <p className="text-lg">
                🎯 New Paper and model out <a href="#" className={linkColor}>Narrow Transformer: Starcoder-Based Java-LM For Desktop</a>
              </p>
            </div>
          </div> */}

          <div className="flex gap-8">
            <div className="text-right min-w-[120px]">
              <p className={`font-semibold ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Jul 25,</p>
              <p className={`font-semibold ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>2024</p>
            </div>
            <div className="flex-1">
              <p className="text-[0.995em]">
                🎯 Ended my internship at Accenture.
              </p>
            </div>
          </div>

          <div className="flex gap-8">
            <div className="text-right min-w-[120px]">
              <p className={`font-semibold ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Jun 13,</p>
              <p className={`font-semibold ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>2024</p>
            </div>
            <div className="flex-1">
              <p className="text-[0.995em]">
                🎯 Joined <strong>Neural Nurture</strong> as Research Intern, working on quantifying the reasoning of Large Language Models. 
              </p>
            </div>
          </div>

          <div className="flex gap-8">
            <div className="text-right min-w-[120px]">
              <p className={`font-semibold ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Jun 10,</p>
              <p className={`font-semibold ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>2024</p>
            </div>
            <div className="flex-1">
              <p className="text-[0.995em]">
                🎯 Joined <strong> BigCode</strong> as an Open Source Research Engineer.
              </p>
            </div>
          </div>

          <div className="flex gap-8">
            <div className="text-right min-w-[120px]">
              <p className={`font-semibold ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Jun 2,</p>
              <p className={`font-semibold ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>2024</p>
            </div>
            <div className="flex-1">
              <p className="text-[0.995em]">
                🎯 Joined <strong>Accenture</strong> as a GenAI Intern. Started to build a Prompt to PPT generator.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      {/* <section className="max-w-7xl mx-auto px-8 py-16">
        <h2 className="text-4xl font-bold mb-12">Latest Posts</h2>
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <span className={`font-semibold ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Oct 10, 2024</span>
            <a href="#" className={`${linkColor} text-[0.995em]`}>Understanding Perplexity</a>
          </div>
          <div className="flex justify-between items-center">
            <span className={`font-semibold ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Sep 30, 2024</span>
            <a href="#" className={`${linkColor} text-[0.995em]`}>NumPy QuadDType: Quadruple Precision for Everyone</a>
          </div>
          <div className="flex justify-between items-center">
            <span className={`font-semibold ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Oct 14, 2023</span>
            <a href="#" className={`${linkColor} text-[0.995em]`}>Self-Attention Mimicking Gradient Descent</a>
          </div>
        </div>
      </section> */}

      {/* Publications Section */}
      {/* <section id="publications" className="max-w-7xl mx-auto px-8 py-16">
        <h2 className="text-4xl font-bold mb-12">Publications</h2>
        <div className="space-y-12"> */}
          {/* Publication 1 */}
          {/* <div className="flex gap-8 items-start">
            <img 
              src="https://images.pexels.com/photos/159581/dictionary-reference-book-learning-meaning-159581.jpeg?auto=compress&cs=tinysrgb&w=200" 
              alt="NextCoder Publication"
              className="w-32 h-32 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h3 className="text-[0.995em] font-semibold mb-2">NextCoder: Robust Adaptation of Code LMs to Diverse Code Edits</h3>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-2 text-[0.995em]`}>
                Swayam Singh*, Tushar Aggarwal*, Abhijeet Awasthi, and <a href="#" className={linkColor}>2 more authors</a>
              </p>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'} italic text-[0.995em]`}>In ICML 2025, Jul 2025</p>
            </div>
          </div> */}

          {/* Publication 2 */}
          {/* <div className="flex gap-8 items-start">
            <img 
              src="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=200" 
              alt="Narrow Transformer Publication"
              className="w-32 h-32 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h3 className="text-[0.995em] font-semibold mb-2">Narrow Transformer: Starcoder-Based Java-LM For Desktop</h3>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-2 text-[0.995em]`}>
                Kamalkumar Rathinasamy, Balaji A J, Ankush Kumar, and <a href="#" className={linkColor}>5 more authors</a>
              </p>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'} italic text-[0.995em]`}>Jul 2024</p>
            </div>
          </div> */}

          {/* Publication 3 */}
          {/* <div className="flex gap-8 items-start">
            <img 
              src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=200" 
              alt="OctoPack Publication"
              className="w-32 h-32 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h3 className="text-[0.995em] font-semibold mb-2">OctoPack: Instruction Tuning Code Large Language Models</h3>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-2 text-[0.995em]`}>
                Niklas Muennighoff, Qian Liu, Armel Zebaze, and <a href="#" className={linkColor}>7 more authors</a>
              </p>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'} italic text-[0.995em]`}>Jul 2023</p>
            </div>
          </div> */}

          {/* Publication 4 */}
          {/* <div className="flex gap-8 items-start">
            <img 
              src="https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=200" 
              alt="StarCoder Publication"
              className="w-32 h-32 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h3 className="text-[0.995em] font-semibold mb-2">StarCoder: may the source be with you!</h3>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-2 text-[0.995em]`}>
                Raymond Li, Loubna Ben Allal, Yangtian Zi, and <a href="#" className={linkColor}>64 more authors</a>
              </p>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'} italic text-[0.995em]`}>Jul 2023</p>
            </div>
          </div> */}
        {/* </div>
      </section> */}

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-8 py-16">
        <div className="flex justify-center space-x-8 mb-8">
          <a href="mailto:saketrambandi@gmail.com" className={`${linkColor} hover:scale-110 transition-transform`}>
            <Mail size={55} />
          </a>
          <a href="https://github.com/SaketRam2706" className={`${linkColor} hover:scale-110 transition-transform`}>
            <Github size={55} />
          </a>
          <a href="https://www.linkedin.com/in/saket-ram-bandi/" className={`${linkColor} hover:scale-110 transition-transform`}>
            <Linkedin size={55} />
          </a>
          <a href="https://www.instagram.com/saketrambandi/" className={`${linkColor} hover:scale-110 transition-transform`}>
            <Instagram size={55} />
          </a>
          <a href="https://open.spotify.com/user/jmji79ranuqeuauiubzu0k3no?si=d3b4a2dfb99f49e8" className={`${linkColor} hover:scale-110 transition-transform`}>
            <FaSpotify size={55} />
          </a>
        </div>
        <p className="text-center text-[0.995em]">Let's Connect 👋</p>
      </footer>

      {/* Let's Chat Button */}
      {/* <button className="fixed bottom-8 right-8 bg-cyan-50
       hover:bg-cyan-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
        Let's Chat 💬
      </button> */}
    </div>
  );
}

export default App;