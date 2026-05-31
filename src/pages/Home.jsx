import { Link } from 'react-router-dom'

function Home() {
  return (
    <main className="container">
      <header className="home-header">
        <h1 className="home-title">It&rsquo;s been five years, have a trip down memory lane at the University of Arizona, 2021, hope all is well</h1>
        <div className="videos-link-wrap">
          <Link to="/videos" className="videos-link">Watch the Videos &rarr;</Link>
        </div>
      </header>
      <article className="letter">
        <p>
          Hello, just over five years ago in May of 2021, many of my friends and I were graduating
          seniors at the University of Arizona in the beloved city of Tucson. It was in the last two
          weeks that the reality really began to set in that this would likely be one of the few, if
          not the last, times that I had all of my friends in the university and city that, for
          better or for worse, played a significant role in all of our lives. It was this
          realization that spurred me to attempt to, however fruitfully, preserve that specific
          moment so that I could cherish it when it had inevitably passed. And what better way to do
          that than to buy a 360 degree camera off of Amazon for a suspiciously low price with the
          prediction that I would have a VR headset five years from now that could let me relive the
          experience (I still do not own a VR headset).
        </p>

        <p>
          So on May 8th, 2021, a large group of us went to the house known as the &ldquo;Bourtyard&rdquo; to
          pregame before going to Dirtbag&rsquo;s Bar and Grill and I took these videos. Some were mostly
          meant to capture the atmosphere, while others directly asked others to send themselves a
          message for five years from now. I put these videos in a Google drive and mostly forgot
          about them until I received a notification on my phone that five years had passed and that
          it was time to send these videos out. After I had barely resisted the urge to vomit from
          the realization that it had been five years since I left college, I spent some time
          watching the videos. They are largely innocuous, and the video quality leaves much to be
          desired, but it is amazing to see the people in these videos in contrast to where they are
          today and the people that they&rsquo;ve become, in a good way! Some are married, or on their way
          to being married, some may be on a course they never would have expected (I know I&rsquo;m in
          that boat), and of course, some have achieved the exact goals that they set out to upon
          graduating. The only regret I have in this experience is not being more insistent on
          people saying a message to themself, as I only captured a few to varying degrees of
          sincerity. I didn&rsquo;t even record one for myself!
        </p>

        <p>
          That being said, I would highly encourage you to repeat the exercise on your own and set a
          reminder to look at it in five years. I&rsquo;d also be happy to keep track for you if you need.
          The purpose is not to set goals that you will ultimately either achieve or not, but to
          capture a moment in your life and appreciate those around you. While college is years
          behind us now and the cast and crew in the current season of our lives may be different
          from what they once were, that doesn&rsquo;t make either better or worse. What matters most is
          being in the present moment because that is truly all we have. I appreciate you suffering
          through my sappy words. I just was moved to say something after being so proud of everyone
          in these videos, and I couldn&rsquo;t leave it unsaid. Wishing you all the best, may the next 5
          years be full of exciting new moments that the current you never could have imagined.
        </p>

        <p className="sign-off">
          Cheers,<br />
          Josh Swain
        </p>

      </article>
    </main>
  )
}

export default Home
