<template>
  <div class="home-container">
    <div class="home-header">
      <header
        data-thq="thq-navbar"
        class="navbarContainer home-navbar-interactive"
      >
        <a
          href="https://kristash.com"
          target="_blank"
          rel="noreferrer noopener"
          class="home-logo logo"
        >
          Kristash
        </a>
        <div data-thq="thq-navbar-nav" class="home-desktop-menu">
          <nav class="home-links">
            <router-link to="/" class="home-home bodySmall">Home</router-link>
            <router-link to="/faq" class="home-faq bodySmall">FAQ</router-link>
            <router-link to="/plans-pricing" class="home-plans-pricing bodySmall">
              Plans &amp; Pricing
            </router-link>
            <router-link to="/portfolio" class="home-portfolio bodySmall">
              Portfolio
            </router-link>
            <router-link to="/resources" class="home-resources bodySmall">
              Resources
            </router-link>
            <router-link to="/contact" class="home-contact bodySmall">
              Contact
            </router-link>
          </nav>
          <div class="home-buttons">
            <button class="home-login buttonFlat">Login</button>
            <button class="buttonFilled">Register</button>
          </div>
        </div>
        <div data-thq="thq-burger-menu" class="home-burger-menu">
          <svg viewBox="0 0 1024 1024" class="home-icon socialIcons">
            <path
              d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
            ></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" class="home-mobile-menu1 mobileMenu">
          <div class="home-nav">
            <div class="home-top">
              <span class="logo">ONLINE MARKETING AGENCY</span>
              <div data-thq="thq-close-menu" class="home-close-menu">
                <svg viewBox="0 0 1024 1024" class="home-icon02 socialIcons">
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                  ></path>
                </svg>
              </div>
            </div>
            <nav class="home-links1">
              <router-link to="/" class="home-home1 bodySmall">Home</router-link>
              <router-link to="/faq" class="home-faq1">FAQ</router-link>
              <router-link to="/plans-pricing" class="home-plans-pricing1">
                Plans &amp; Pricing
              </router-link>
              <router-link to="/portfolio" class="home-portfolio1">
                Portfolio
              </router-link>
              <router-link to="/resources" class="home-resources1 bodySmall">
                Resources
              </router-link>
              <router-link to="/contact" class="home-contact1 bodySmall">
                Contact
              </router-link>
            </nav>
            <div class="home-buttons1">
              <button class="buttonFlat">Login</button>
              <button class="buttonFilled">Register</button>
            </div>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              class="home-icon04 socialIcons"
            >
              <path
                d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
              ></path></svg
            ><svg
              viewBox="0 0 877.7142857142857 1024"
              class="home-icon06 socialIcons"
            >
              <path
                d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
              ></path></svg
            ><svg
              viewBox="0 0 602.2582857142856 1024"
              class="home-icon08 socialIcons"
            >
              <path
                d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
              ></path>
            </svg>
          </div>
        </div>
      </header>
    </div>
    <div class="home-hero">
      <div class="home-hero1 heroContainer">
        <div class="home-container01">
          <h1 class="home-hero-heading heading1">
            Welcome to our Online Marketing Agency
          </h1>
          <span class="home-hero-sub-heading bodyLarge">
            <span>
              <span>
                <span>
                  Boost your online presence with our professional services
                </span>
                <span><span v-html="raw0jos"></span></span>
              </span>
              <span>
                <span><span v-html="rawaq5s"></span></span>
                <span><span v-html="rawhykk"></span></span>
              </span>
            </span>
            <span>
              <span>
                <span><span v-html="raw5d3r"></span></span>
                <span><span v-html="raw5r9y"></span></span>
              </span>
              <span>
                <span><span v-html="rawe1ph"></span></span>
                <span><span v-html="rawrurj"></span></span>
              </span>
            </span>
          </span>
          <div class="home-btn-group">
            <button class="buttonFilled">Get Started</button>
            <button class="buttonFlat">Learn More →</button>
          </div>
        </div>
      </div>
    </div>
    <div class="home-container02">
      <h2 class="home-text14">What&apos;s your SEO score?</h2>
      <div class="home-container03">
        <div class="home-container04">
          <DangerousHTML
            html="<!-- Begin MySiteAuditor -->
  <script src='//cdn.mysiteauditor.com/audit-tool.js' type='text/javascript'></script>
  
  <div id='seogroup-embed'  data-apikey='e3be6b3d12972592de7794d0b8bae48e0889223d' data-language='english' data-type='slim' data-hex-color='#000000' data-hex-cta-color='#566822' data-hex-text='#FFFFFF' data-load-bar-color='#61B13B' data-font='Roboto'></div>
  <!-- End MySiteAuditor -->"
          ></DangerousHTML>
        </div>
      </div>
    </div>
    <div class="home-features">
      <div class="featuresContainer">
        <div class="home-features1">
          <div class="home-container05">
            <span class="overline">
              <span>features</span>
              <br />
            </span>
            <h2 class="home-features-heading heading2">Our Services</h2>
            <span class="home-features-sub-heading bodyLarge">
              <span>
                <span>
                  <span>
                    We offer a range of services to help your business thrive
                  </span>
                  <span><span v-html="raw3r0e"></span></span>
                </span>
                <span>
                  <span><span v-html="rawzd5x"></span></span>
                  <span><span v-html="rawj8ox"></span></span>
                </span>
              </span>
              <span>
                <span>
                  <span><span v-html="rawptta"></span></span>
                  <span><span v-html="rawds3e"></span></span>
                </span>
                <span>
                  <span><span v-html="raw29k3"></span></span>
                  <span><span v-html="rawdrvd"></span></span>
                </span>
              </span>
            </span>
          </div>
          <div class="home-container06">
            <feature-card
              heading="Website Design"
              subHeading="Custom and responsive website designs that showcase your brand."
            ></feature-card>
            <feature-card
              heading="Content Creation"
              subHeading="Creative content when &amp; where you need it. Ex: blog articles, social media posts, or product descriptions; etc."
            ></feature-card>
            <feature-card
              heading="Logo Design"
              subHeading="Unique and memorable logo designs that represent your business."
            ></feature-card>
            <feature-card
              heading="Company Branding"
              subHeading="Establish yourself online &amp; offline with custom business cards, social media handles, and more!"
            ></feature-card>
            <feature-card
              heading="SEO &amp; Local SEO"
              subHeading="Optimize your website to improve search engine rankings and increase organic traffic both generally &amp; locally in your area."
            ></feature-card>
            <feature-card
              heading="Business Coaching"
              subHeading="Expert guidance and strategies to help your business grow and succeed."
            ></feature-card>
          </div>
        </div>
      </div>
    </div>
    <div class="home-pricing">
      <div class="pricingContainer home-pricing1">
        <div class="home-container07">
          <span class="overline">
            <span>Pricing</span>
            <br />
          </span>
          <h2 class="heading2">Choose the Website for Your Business</h2>
          <span class="home-pricing-sub-heading bodyLarge">
            <span>
              <span>
                We offer flexible pricing options to meet your specific needs
              </span>
            </span>
          </span>
        </div>
        <div class="home-container08">
          <div class="freePricingCard home-pricing-card">
            <div class="home-container09">
              <span class="home-text37 heading3">Portfolio</span>
              <span>
                A basic website for an artist or musician that wants to showcase
                their art/music.
              </span>
            </div>
            <div class="home-container10">
              <span class="home-text38">
                <span>$</span>
                <span></span>
              </span>
              <span class="home-free-plan-price">597</span>
            </div>
            <div class="home-container11">
              <div class="home-container12">
                <span class="home-text41">✔</span>
                <span class="bodySmall">Website design</span>
              </div>
              <div class="home-container13">
                <span class="home-text42">✔</span>
                <span class="bodySmall">Simple Logo design</span>
              </div>
              <div class="home-container14">
                <span class="home-text43">✔</span>
                <span class="bodySmall">Basic SEO</span>
              </div>
              <div class="home-container15">
                <span class="home-text44">✔</span>
                <span class="bodySmall">
                   Headless CMS integration for adding/updating website content
                </span>
              </div>
              <div class="home-container16">
                <span class="home-text45">
                  <br />
                  <span>✔</span>
                </span>
                <span class="bodySmall">
                  <br />
                  <span>Business Consultation</span>
                </span>
              </div>
            </div>
            <button class="home-button buttonOutline">
              Continue with a PORTFOLIO site
            </button>
          </div>
          <div class="basicPricingCard home-pricing-card1">
            <div class="home-container17">
              <span class="home-text50 heading3">Professional</span>
              <span>
                An affordable SEO-optimized website for small businesses that are
                primarily service-based. (Tattoo artists, barbers, cleaners,
                chiropractors, holistic health practitioners; etc.)
              </span>
            </div>
            <div class="home-container18">
              <span class="home-text51">
                <span>$</span>
                <span></span>
              </span>
              <span class="home-basic-plan-pricing">897</span>
            </div>
            <div class="home-container19">
              <div class="home-container20">
                <span class="home-text54">✔</span>
                <span class="bodySmall">
                  All features of PORTFOLIO site, PLUS:
                </span>
              </div>
              <div class="home-container21">
                <span class="home-text56">✔</span>
                <span>Take appointments via a Booking Plugin</span>
              </div>
              <div class="home-container22">
                <span class="home-text57">✔</span>
                <span class="bodySmall">Advanced SEO</span>
              </div>
              <div class="home-container23">
                <span class="home-text58">✔</span>
                <span class="bodySmall">Business coaching ZOOM session (2x)</span>
              </div>
            </div>
            <button class="home-button1 buttonFilledSecondary">
              Build me a PROFESSIONAL website
            </button>
          </div>
          <div class="proPricingCard home-pricing-card2">
            <div class="home-container24">
              <span class="home-text59 heading3">
                <span>e-commerce</span>
                <br />
              </span>
              <span class="bodySmall">
                A comprehensive plan for growing businesses
              </span>
            </div>
            <div class="home-container25">
              <span class="home-text62">
                <span>$</span>
                <span></span>
              </span>
              <span class="home-pro-plan-pricing">1497</span>
            </div>
            <div class="home-container26">
              <div class="home-container27">
                <span class="home-text65">✔</span>
                <span class="bodySmall">
                   All features of PROFESSIONAL website
                </span>
              </div>
              <div class="home-container28">
                <span class="home-text67">✔</span>
                <span>Ability to Sell Unlimited # of Products or Services</span>
              </div>
              <div class="home-container29">
                <span class="home-text68">✔</span>
                <span class="bodySmall">Premium Logo design</span>
              </div>
              <div class="home-container30">
                <span class="home-text69">✔</span>
                <span class="bodySmall">Premium SEO</span>
              </div>
              <div class="home-container31">
                <span class="home-text70">✔</span>
                <span class="bodySmall">
                  Extensive business coaching via ZOOM
                </span>
              </div>
            </div>
            <button class="home-button2 buttonFilledSecondary">
              Build me an E-COMMERCE website
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="home-banner">
      <div class="bannerContainer home-banner1">
        <h1 class="home-banner-heading heading2">
          We Design, Optimize, and Coach for Success
        </h1>
        <button type="button" class="buttonFilled home-banner-button">
          Learn More
        </button>
        <span class="home-banner-sub-heading bodySmall">
          <span>
            <span>
              <span>
                At our online marketing agency, we offer a range of services to
                help businesses and startups thrive in the digital world. From
                stunning website designs to effective SEO strategies, we have the
                expertise to elevate your brand and drive results. Partner with us
                and take your online presence to new heights.
              </span>
              <span><span v-html="rawk4km"></span></span>
            </span>
            <span>
              <span><span v-html="raw1sw1"></span></span>
              <span><span v-html="rawoe1a"></span></span>
            </span>
          </span>
          <span>
            <span>
              <span><span v-html="raw2681"></span></span>
              <span><span v-html="rawblr9"></span></span>
            </span>
            <span>
              <span><span v-html="raw25u5"></span></span>
              <span><span v-html="raw5yw8"></span></span>
            </span>
          </span>
        </span>
      </div>
    </div>
    <div class="home-faq2">
      <div class="faqContainer">
        <div class="home-faq3">
          <div class="home-container32">
            <span class="overline">
              <span>FAQ</span>
              <br />
            </span>
            <h2 class="home-text88 heading2">Common Questions</h2>
            <span class="home-text89 bodyLarge">
              <span>Here are some of the most common questions that we get.</span>
              <br />
            </span>
          </div>
          <div class="home-container33">
            <app-question1
              answer="Our online marketing agency offers website design, logo design, SEO, and business coaching services to businesses and startups."
              question="What services does your online marketing agency offer?"
            ></app-question1>
            <app-question1
              answer="You can contact our online marketing agency by visiting the 'Contact' page on our website and filling out the contact form or by calling our provided phone number."
              question="How can I contact your online marketing agency?"
            ></app-question1>
            <app-question1
              answer="Yes, we offer customized website design solutions tailored to meet the specific needs and preferences of each client."
              question="Do you offer customized website design solutions?"
            ></app-question1>
            <app-question1
              answer="To get a logo designed by our agency, you can fill out the logo design request form on our website. Our team will then contact you to discuss your requirements and provide you with design concepts."
              question="What is the process for getting a logo designed by your agency?"
            ></app-question1>
            <app-question1
              answer="Yes, we specialize in SEO (Search Engine Optimization) and can help improve your website's search engine rankings through various strategies such as keyword optimization, content creation, and link building."
              question="Can you help improve my website's search engine rankings?"
            ></app-question1>
          </div>
        </div>
      </div>
    </div>
    <div class="home-footer">
      <footer class="footerContainer home-footer1">
        <div class="home-container34">
          <a
            href="https://kristash.com"
            target="_blank"
            rel="noreferrer noopener"
            class="home-logo2"
          >
            Kristash
          </a>
          <nav class="home-nav1">
            <router-link to="/" class="home-home2 bodySmall">Home</router-link>
            <router-link to="/faq" class="home-faq4 bodySmall">FAQ</router-link>
            <router-link
              to="/plans-pricing"
              class="home-plans-pricing2 bodySmall"
            >
              Plans &amp; Pricing
            </router-link>
            <router-link to="/portfolio" class="home-portfolio2 bodySmall">
              Portfolio
            </router-link>
            <router-link to="/resources" class="home-resources2 bodySmall">
              Resources
            </router-link>
            <router-link to="/contact" class="home-contact2 bodySmall">
              Contact
            </router-link>
          </nav>
        </div>
        <div class="home-separator"></div>
        <div class="home-container35">
          <span class="home-text92">
            <span class="bodySmall">
              Copyright © 2024,
              <span v-html="rawj0v5"></span>
            </span>
            <a
              href="https://kristash.com"
              target="_blank"
              rel="noreferrer noopener"
              class="home-link"
            >
              Kristash
            </a>
            <span class="bodySmall">. All Rights Reserved.</span>
          </span>
          <div class="home-icon-group1">
            <a href="https://twitter.com/kristashinc" class="home-link1">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                class="home-icon10 socialIcons"
              >
                <path
                  d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
                ></path>
              </svg>
            </a>
            <a href="https://instagram.com/kristashinc" class="home-link2">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                class="home-icon12 socialIcons"
              >
                <path
                  d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
                ></path>
              </svg>
            </a>
            <a
              href="https://facebook.com/kristashinc"
              target="_blank"
              rel="noreferrer noopener"
              class="home-link3"
            >
              <svg
                viewBox="0 0 602.2582857142856 1024"
                class="home-icon14 socialIcons"
              >
                <path
                  d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import DangerousHTML from 'dangerous-html/vue'

import FeatureCard from '../components/feature-card'
import AppQuestion1 from '../components/question1'

export default {
  name: 'Home',
  props: {},
  components: {
    DangerousHTML,
    FeatureCard,
    AppQuestion1,
  },
  data() {
    return {
      raw0jos: ' ',
      rawaq5s: ' ',
      rawhykk: ' ',
      raw5d3r: ' ',
      raw5r9y: ' ',
      rawe1ph: ' ',
      rawrurj: ' ',
      raw3r0e: ' ',
      rawzd5x: ' ',
      rawj8ox: ' ',
      rawptta: ' ',
      rawds3e: ' ',
      raw29k3: ' ',
      rawdrvd: ' ',
      rawk4km: ' ',
      raw1sw1: ' ',
      rawoe1a: ' ',
      raw2681: ' ',
      rawblr9: ' ',
      raw25u5: ' ',
      raw5yw8: ' ',
      rawj0v5: ' ',
    }
  },
  metaInfo: {
    title: 'Kristash | Online Marketing Agency',
    meta: [
      {
        name: 'description',
        content:
          'Elevate your online presence with Kristash, your trusted digital marketing agency in Omaha, NE. Drive results with expert SEO, PPC, social media, & web design.',
      },
      {
        property: 'og:title',
        content: 'Kristash | Online Marketing Agency',
      },
      {
        property: 'og:description',
        content:
          'Elevate your online presence with Kristash, your trusted digital marketing agency in Omaha, NE. Drive results with expert SEO, PPC, social media, & web design.',
      },
    ],
  },
}
</script>

<style scoped>
.home-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.home-header {
  width: 100%;
  display: flex;
  z-index: 100;
  position: fixed;
  align-items: center;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}
.home-logo {
  text-decoration: none;
}
.home-desktop-menu {
  flex: 1;
  display: flex;
  justify-content: space-between;
}
.home-links {
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.home-home {
  transition: 0.3s;
  text-decoration: none;
}
.home-faq {
  transition: 0.3s;
  margin-left: var(--dl-space-space-twounits);
  text-decoration: none;
}
.home-plans-pricing {
  transition: 0.3s;
  margin-left: var(--dl-space-space-twounits);
  text-decoration: none;
}
.home-portfolio {
  transition: 0.3s;
  margin-left: var(--dl-space-space-twounits);
  text-decoration: none;
}
.home-resources {
  transition: 0.3s;
  margin-left: var(--dl-space-space-twounits);
  text-decoration: none;
}
.home-contact {
  transition: 0.3s;
  margin-left: var(--dl-space-space-twounits);
  text-decoration: none;
}
.home-buttons {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.home-login {
  margin-right: 32px;
}
.home-burger-menu {
  display: none;
}
.home-icon {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}
.home-mobile-menu1 {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  display: flex;
  padding: 32px;
  z-index: 100;
  position: absolute;
  transform: translateY(-100%);
  transition: 0.5s;
  flex-direction: column;
  justify-content: space-between;
}
.home-nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.home-top {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}
.home-close-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-icon02 {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}
.home-links1 {
  flex: 0 0 auto;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
.home-home1 {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.home-faq1 {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.home-plans-pricing1 {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.home-portfolio1 {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.home-resources1 {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.home-contact1 {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.home-buttons1 {
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.home-icon04 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.home-icon06 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.home-icon08 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.home-hero {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 96px;
  align-items: flex-start;
  justify-content: center;
}
.home-hero1 {
  height: 378px;
}
.home-container01 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.home-hero-heading {
  width: 881px;
  max-width: 800px;
  text-align: center;
}
.home-hero-sub-heading {
  font-size: 18px;
  text-align: center;
}
.home-btn-group {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: center;
  flex-direction: row;
}
.home-container02 {
  width: 100%;
  height: 255px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #000000;
}
.home-text14 {
  color: rgb(255, 255, 255);
  width: 390px;
  font-size: 32px;
  padding-top: var(--dl-space-space-oneandhalfunits);
  background-color: rgb(0, 0, 0);
}
.home-container03 {
  width: 1114px;
  height: 161px;
  padding-bottom: var(--dl-space-space-halfunit);
}
.home-container04 {
  display: contents;
}
.home-features {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-features1 {
  gap: var(--dl-space-space-threeunits);
  width: 100%;
  height: 819px;
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  padding-top: var(--dl-space-space-fourunits);
  padding-left: var(--dl-space-space-threeunits);
  padding-right: var(--dl-space-space-threeunits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-sixunits);
  justify-content: flex-start;
}
.home-container05 {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.home-features-heading {
  margin-bottom: var(--dl-space-space-oneandhalfunits);
}
.home-features-sub-heading {
  font-size: 18px;
  text-align: center;
}
.home-container06 {
  width: 100%;
  display: grid;
  grid-gap: var(--dl-space-space-oneandhalfunits);
  grid-template-columns: 1fr 1fr;
}
.home-pricing {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-container07 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.home-pricing-sub-heading {
  text-align: center;
}
.home-container08 {
  gap: var(--dl-space-space-twounits);
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.home-container09 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.home-text37 {
  text-transform: uppercase;
}
.home-container10 {
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-twounits);
  flex-direction: row;
}
.home-text38 {
  font-size: 1.15rem;
  margin-top: var(--dl-space-space-twounits);
  font-weight: 300;
}
.home-free-plan-price {
  font-size: 4rem;
  font-weight: 700;
}
.home-container11 {
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: column;
}
.home-container12 {
  gap: 4px;
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: row;
}
.home-text41 {
  line-height: 150%;
}
.home-container13 {
  gap: 4px;
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: row;
}
.home-text42 {
  line-height: 150%;
}
.home-container14 {
  gap: 4px;
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: row;
}
.home-text43 {
  line-height: 150%;
}
.home-container15 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.home-text44 {
  line-height: 150%;
}
.home-container16 {
  gap: 4px;
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: row;
}
.home-text45 {
  line-height: 150%;
}
.home-button {
  width: 100%;
}
.home-container17 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.home-text50 {
  text-transform: uppercase;
}
.home-container18 {
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-twounits);
  flex-direction: row;
}
.home-text51 {
  font-size: 1.15rem;
  margin-top: var(--dl-space-space-twounits);
  font-weight: 300;
}
.home-basic-plan-pricing {
  font-size: 4rem;
  font-weight: 700;
}
.home-container19 {
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-threeunits);
  flex-direction: column;
}
.home-container20 {
  gap: 4px;
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: row;
}
.home-text54 {
  line-height: 150%;
}
.home-container21 {
  gap: 4px;
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: row;
}
.home-text56 {
  line-height: 150%;
}
.home-container22 {
  gap: 4px;
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: row;
}
.home-text57 {
  line-height: 150%;
}
.home-container23 {
  gap: 4px;
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: row;
}
.home-text58 {
  line-height: 150%;
}
.home-button1 {
  width: 100%;
}
.home-container24 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.home-text59 {
  text-transform: uppercase;
}
.home-container25 {
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-twounits);
  flex-direction: row;
}
.home-text62 {
  font-size: 1.15rem;
  margin-top: var(--dl-space-space-twounits);
  font-weight: 300;
}
.home-pro-plan-pricing {
  font-size: 4rem;
  font-weight: 700;
}
.home-container26 {
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: column;
}
.home-container27 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: row;
}
.home-text65 {
  line-height: 150%;
}
.home-container28 {
  gap: 4px;
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: row;
}
.home-text67 {
  line-height: 150%;
}
.home-container29 {
  gap: 4px;
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: row;
}
.home-text68 {
  line-height: 150%;
}
.home-container30 {
  gap: 4px;
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: row;
}
.home-text69 {
  line-height: 150%;
}
.home-container31 {
  gap: 4px;
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: row;
}
.home-text70 {
  line-height: 150%;
}
.home-button2 {
  width: 100%;
  animation-name: headShake;
  animation-delay: 0s;
  animation-duration: 300ms;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}
.home-banner {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-banner-heading {
  text-align: center;
}
.home-banner-sub-heading {
  max-width: var(--dl-size-size-maxwidth);
  margin-top: var(--dl-space-space-twounits);
  text-align: center;
  margin-bottom: var(--dl-space-space-twounits);
}
.home-faq2 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-faq3 {
  gap: var(--dl-space-space-twounits);
  width: 100%;
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: flex-start;
  padding-top: var(--dl-space-space-fourunits);
  padding-left: var(--dl-space-space-threeunits);
  padding-right: var(--dl-space-space-threeunits);
  flex-direction: row;
  padding-bottom: var(--dl-space-space-fourunits);
}
.home-container32 {
  display: flex;
  max-width: 35%;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.home-text88 {
  margin-bottom: var(--dl-space-space-oneandhalfunits);
}
.home-text89 {
  text-align: left;
}
.home-container33 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.home-footer {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-container34 {
  gap: var(--dl-space-space-unit);
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.home-logo2 {
  font-size: 2em;
  font-family: "Cabin";
  font-weight: 700;
  line-height: 150%;
  text-transform: uppercase;
  text-decoration: none;
}
.home-nav1 {
  flex: 0 0 auto;
  display: flex;
  margin-top: 0px;
  align-items: center;
  flex-direction: row;
}
.home-home2 {
  margin-left: 0px;
  text-decoration: none;
}
.home-faq4 {
  margin-left: var(--dl-space-space-unit);
  text-decoration: none;
}
.home-plans-pricing2 {
  margin-left: var(--dl-space-space-unit);
  text-decoration: none;
}
.home-portfolio2 {
  margin-left: var(--dl-space-space-unit);
  text-decoration: none;
}
.home-resources2 {
  margin-left: var(--dl-space-space-unit);
  text-decoration: none;
}
.home-contact2 {
  margin-left: var(--dl-space-space-unit);
  text-decoration: none;
}
.home-separator {
  flex: 0 0 auto;
  width: 100%;
  height: 0px;
  display: flex;
  margin-top: var(--dl-space-space-twounits);
  align-items: flex-start;
  margin-left: 0px;
  border-color: var(--dl-color-gray-900);
  border-style: solid;
  border-width: 1px;
  margin-right: 0px;
  margin-bottom: var(--dl-space-space-twounits);
  flex-direction: row;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
}
.home-container35 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.home-text92 {
  font-size: 16px;
  font-family: "Cabin";
  font-weight: 400;
  line-height: 150%;
}
.home-link {
  text-decoration: underline;
}
.home-icon-group1 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.home-link1 {
  display: contents;
}
.home-icon10 {
  width: 24px;
  height: 24px;
  margin-right: var(--dl-space-space-twounits);
  text-decoration: none;
}
.home-link2 {
  display: contents;
}
.home-icon12 {
  width: 24px;
  height: 24px;
  margin-right: var(--dl-space-space-twounits);
  text-decoration: none;
}
.home-link3 {
  display: contents;
}
.home-icon14 {
  width: 24px;
  height: 24px;
  text-decoration: none;
}
@media(max-width: 991px) {
  .home-hero1 {
    flex-direction: column;
  }
  .home-container01 {
    align-items: center;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
    padding-right: 0px;
  }
  .home-hero-heading {
    text-align: center;
  }
  .home-hero-sub-heading {
    text-align: center;
    padding-left: var(--dl-space-space-threeunits);
    padding-right: var(--dl-space-space-threeunits);
  }
  .home-features-sub-heading {
    text-align: center;
    padding-left: var(--dl-space-space-threeunits);
    padding-right: var(--dl-space-space-threeunits);
  }
  .home-pricing-sub-heading {
    text-align: center;
    padding-left: var(--dl-space-space-threeunits);
    padding-right: var(--dl-space-space-threeunits);
  }
  .home-container08 {
    align-items: center;
    flex-direction: column;
  }
  .home-pricing-card {
    width: 100%;
    padding: var(--dl-space-space-twounits);
    max-width: 450px;
  }
  .home-pricing-card1 {
    width: 100%;
    max-width: 450px;
  }
  .home-pricing-card2 {
    width: 100%;
    max-width: 450px;
  }
  .home-banner-sub-heading {
    max-width: 100%;
  }
  .home-text89 {
    text-align: center;
    padding-left: var(--dl-space-space-threeunits);
    padding-right: var(--dl-space-space-threeunits);
  }
}
@media(max-width: 767px) {
  .home-navbar-interactive {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .home-desktop-menu {
    display: none;
  }
  .home-burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .home-home1 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .home-faq1 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
  .home-plans-pricing1 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
  .home-portfolio1 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
  .home-resources1 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
  .home-contact1 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
  .home-hero1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .home-hero-sub-heading {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }
  .home-features1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .home-features-sub-heading {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }
  .home-container06 {
    grid-template-columns: 1fr;
  }
  .home-pricing-sub-heading {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }
  .home-container08 {
    align-items: center;
    flex-direction: column;
  }
  .home-pricing-card {
    width: 100%;
    max-width: 450px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
  }
  .home-pricing-card1 {
    width: 100%;
    max-width: 450px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
  }
  .home-pricing-card2 {
    width: 100%;
    max-width: 450px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
  }
  .home-banner1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .home-banner-sub-heading {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }
  .home-faq3 {
    flex-direction: column;
  }
  .home-container32 {
    max-width: 100%;
    align-self: center;
    align-items: center;
    justify-content: center;
  }
  .home-text89 {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }
  .home-footer1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .home-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .home-container35 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .home-text92 {
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
@media(max-width: 479px) {
  .home-navbar-interactive {
    padding: var(--dl-space-space-unit);
  }
  .home-mobile-menu1 {
    padding: 16px;
  }
  .home-faq1 {
    line-height: 150%;
  }
  .home-plans-pricing1 {
    line-height: 150%;
  }
  .home-portfolio1 {
    line-height: 150%;
    text-decoration: none;
  }
  .home-hero1 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .home-container01 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .home-btn-group {
    flex-direction: column;
  }
  .home-features1 {
    height: 1250px;
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .home-pricing1 {
    height: 2230px;
  }
  .home-pricing-card2 {
    margin-bottom: 0px;
  }
  .home-banner1 {
    height: 235px;
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    margin-bottom: 0px;
    padding-right: var(--dl-space-space-unit);
    padding-bottom: 13px;
  }
  .home-banner-button {
    top: 157px;
    left: 177px;
    position: absolute;
  }
  .home-footer1 {
    padding: var(--dl-space-space-unit);
  }
  .home-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .home-container35 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .home-text92 {
    text-align: center;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
</style>
