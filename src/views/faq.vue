<template>
  <div class="faq-container">
    <div class="faq-header">
      <header
        data-thq="thq-navbar"
        class="navbarContainer faq-navbar-interactive"
      >
        <a
          href="https://kristash.com"
          target="_blank"
          rel="noreferrer noopener"
          class="faq-logo logo"
        >
          Kristash
        </a>
        <div data-thq="thq-navbar-nav" class="faq-desktop-menu">
          <nav class="faq-links">
            <router-link to="/" class="faq-home bodySmall">Home</router-link>
            <router-link to="/faq" class="faq-faq bodySmall">FAQ</router-link>
            <router-link to="/plans-pricing" class="faq-plans-pricing bodySmall">
              Plans &amp; Pricing
            </router-link>
            <router-link to="/portfolio" class="faq-portfolio bodySmall">
              Portfolio
            </router-link>
            <router-link to="/resources" class="faq-resources bodySmall">
              Resources
            </router-link>
            <span class="faq-contact bodySmall">Contact</span>
          </nav>
          <div class="faq-buttons">
            <button class="faq-login buttonFlat">Login</button>
            <button class="buttonFilled">Register</button>
          </div>
        </div>
        <div data-thq="thq-burger-menu" class="faq-burger-menu">
          <svg viewBox="0 0 1024 1024" class="faq-icon socialIcons">
            <path
              d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
            ></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" class="faq-mobile-menu1 mobileMenu">
          <div class="faq-nav">
            <div class="faq-top">
              <span class="logo">ONLINE MARKETING AGENCY</span>
              <div data-thq="thq-close-menu" class="faq-close-menu">
                <svg viewBox="0 0 1024 1024" class="faq-icon02 socialIcons">
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                  ></path>
                </svg>
              </div>
            </div>
            <nav class="faq-links1">
              <router-link to="/" class="faq-home1 bodySmall">Home</router-link>
              <router-link to="/faq" class="faq-faq1 bodySmall">FAQ</router-link>
              <router-link
                to="/plans-pricing"
                class="faq-plans-pricing1 bodySmall"
              >
                Plans &amp; Pricing
              </router-link>
              <router-link to="/portfolio" class="faq-portfolio1 bodySmall">
                Portfolio
              </router-link>
              <router-link to="/resources" class="faq-resources1 bodySmall">
                Resources
              </router-link>
              <router-link to="/contact" class="faq-contact1 bodySmall">
                Contact
              </router-link>
            </nav>
            <div class="faq-buttons1">
              <button class="buttonFlat">Login</button>
              <button class="buttonFilled">Register</button>
            </div>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              class="faq-icon04 socialIcons"
            >
              <path
                d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
              ></path></svg
            ><svg
              viewBox="0 0 877.7142857142857 1024"
              class="faq-icon06 socialIcons"
            >
              <path
                d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
              ></path></svg
            ><svg
              viewBox="0 0 602.2582857142856 1024"
              class="faq-icon08 socialIcons"
            >
              <path
                d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
              ></path>
            </svg>
          </div>
        </div>
      </header>
    </div>
    <div class="faq-hero">
      <div class="faq-hero1 heroContainer">
        <div class="faq-container1">
          <h1 class="faq-hero-heading">
            <span class="heading1 faq-text">FAQ</span>
            <br />
          </h1>
          <span class="faq-hero-sub-heading bodyLarge">
            <span>
              <span>
                <span>
                  Boost your online presence with our professional services
                </span>
                <span><span v-html="rawvwfn"></span></span>
              </span>
              <span>
                <span><span v-html="raw19jk"></span></span>
                <span><span v-html="rawjyaa"></span></span>
              </span>
            </span>
            <span>
              <span>
                <span><span v-html="raw3kvz"></span></span>
                <span><span v-html="rawkdxs"></span></span>
              </span>
              <span>
                <span><span v-html="rawey5f"></span></span>
                <span><span v-html="rawn7yk"></span></span>
              </span>
            </span>
          </span>
        </div>
        <h2 class="faq-text16 heading2">Frequently Asked Questions</h2>
        <span class="faq-text17 bodyLarge">
          <span>Here are some of the most common questions that we get.</span>
          <br />
        </span>
      </div>
    </div>
    <div class="faq-features">
      <div class="faq-features-container featuresContainer">
        <div class="faq-faq2">
          <div class="faq-container2">
            <app-question1
              answer="Our online marketing agency offers Website Design, Content Creation, Logo Design, Company Branding, SEO/Local SEO, and Business Coaching services to startups, small businesses, musicians, artists, and many other other entities."
              question="What services does your online marketing agency offer?"
            ></app-question1>
            <app-question1
              answer="You can contact us via email at info@kristash.com, by phone number at 531.270.1723, or by visiting the Contact page on our website and filling out the contact form."
              question="How can I contact your online marketing agency?"
            ></app-question1>
            <app-question1
              answer="Yes, we offer customized website design solutions tailored to meet the specific needs and preferences of each client. We understand that every client is different, so get in contact with us today to go over the specifics of your needs!"
              question="Do you offer customized website design solutions?"
            ></app-question1>
            <app-question1
              answer="To get a logo designed by our agency, you can fill out the logo design request form on our website. Our team will then contact you to discuss your requirements and provide you with design concepts."
              question="What is the process for getting a logo designed by your agency?"
            ></app-question1>
            <app-question1
              answer="Yes, we specialize in SEO (Search Engine Optimization) and can help improve your website's search engine rankings through various strategies such as keyword optimization, content creation, and link building among other expert techniques."
              question="Can you help improve my website's search engine rankings?"
            ></app-question1>
          </div>
        </div>
      </div>
    </div>
    <div class="faq-pricing"></div>
    <div class="faq-banner"></div>
    <div class="faq-faq3"><div class="faq-faq-container faqContainer"></div></div>
    <div class="faq-footer">
      <footer class="footerContainer faq-footer1">
        <div class="faq-container3">
          <a
            href="https://kristash.com"
            target="_blank"
            rel="noreferrer noopener"
            class="faq-logo2"
          >
            Kristash
          </a>
          <nav class="faq-nav1">
            <router-link to="/" class="faq-home2 bodySmall">Home</router-link>
            <router-link to="/faq" class="faq-faq4 bodySmall">FAQ</router-link>
            <router-link to="/plans-pricing" class="faq-plans-pricing2 bodySmall">
              Plans &amp; Pricing
            </router-link>
            <router-link to="/portfolio" class="faq-portfolio2 bodySmall">
              Portfolio
            </router-link>
            <router-link to="/resources" class="faq-resources2 bodySmall">
              Resources
            </router-link>
            <span class="faq-contact2 bodySmall">Contact</span>
          </nav>
        </div>
        <div class="faq-separator"></div>
        <div class="faq-container4">
          <span class="faq-text20">
            <span class="bodySmall">
              Copyright © 2024,
              <span v-html="rawnepn"></span>
            </span>
            <a
              href="https://kristash.com"
              target="_blank"
              rel="noreferrer noopener"
              class="faq-link"
            >
              Kristash
            </a>
            <span class="bodySmall">. All Rights Reserved.</span>
          </span>
          <div class="faq-icon-group1">
            <a href="https://twitter.com/kristashinc" class="faq-link1">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                class="faq-icon10 socialIcons"
              >
                <path
                  d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
                ></path>
              </svg>
            </a>
            <a href="https://instagram.com/kristashinc" class="faq-link2">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                class="faq-icon12 socialIcons"
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
              class="faq-link3"
            >
              <svg
                viewBox="0 0 602.2582857142856 1024"
                class="faq-icon14 socialIcons"
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
import AppQuestion1 from '../components/question1'

export default {
  name: 'FAQ',
  props: {},
  components: {
    AppQuestion1,
  },
  data() {
    return {
      rawvwfn: ' ',
      raw19jk: ' ',
      rawjyaa: ' ',
      raw3kvz: ' ',
      rawkdxs: ' ',
      rawey5f: ' ',
      rawn7yk: ' ',
      rawnepn: ' ',
    }
  },
  metaInfo: {
    title: 'FAQ | Kristash',
    meta: [
      {
        name: 'description',
        content:
          'Elevate your online presence with Kristash, your trusted digital marketing agency in Omaha, NE. Drive results with expert SEO, PPC, social media, & web design.',
      },
      {
        property: 'og:title',
        content: 'FAQ | Kristash',
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
.faq-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.faq-header {
  width: 100%;
  display: flex;
  z-index: 100;
  position: fixed;
  align-items: center;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}
.faq-logo {
  text-decoration: none;
}
.faq-desktop-menu {
  flex: 1;
  display: flex;
  justify-content: space-between;
}
.faq-links {
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.faq-home {
  transition: 0.3s;
  text-decoration: none;
}
.faq-faq {
  transition: 0.3s;
  margin-left: var(--dl-space-space-twounits);
  text-decoration: none;
}
.faq-plans-pricing {
  transition: 0.3s;
  margin-left: var(--dl-space-space-twounits);
  text-decoration: none;
}
.faq-portfolio {
  transition: 0.3s;
  margin-left: var(--dl-space-space-twounits);
  text-decoration: none;
}
.faq-resources {
  transition: 0.3s;
  margin-left: var(--dl-space-space-twounits);
  text-decoration: none;
}
.faq-contact {
  transition: 0.3s;
  margin-left: var(--dl-space-space-twounits);
}
.faq-buttons {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.faq-login {
  margin-right: 32px;
}
.faq-burger-menu {
  display: none;
}
.faq-icon {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}
.faq-mobile-menu1 {
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
.faq-nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.faq-top {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}
.faq-close-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}
.faq-icon02 {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}
.faq-links1 {
  flex: 0 0 auto;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
.faq-home1 {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.faq-faq1 {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.faq-plans-pricing1 {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.faq-portfolio1 {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.faq-resources1 {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.faq-contact1 {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.faq-buttons1 {
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.faq-icon04 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.faq-icon06 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.faq-icon08 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.faq-hero {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 96px;
  align-items: flex-start;
  justify-content: center;
}
.faq-hero1 {
  height: 259px;
}
.faq-container1 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.faq-hero-heading {
  max-width: 800px;
  text-align: center;
}
.faq-hero-sub-heading {
  font-size: 18px;
  text-align: center;
}
.faq-text16 {
  margin-bottom: var(--dl-space-space-oneandhalfunits);
}
.faq-text17 {
  text-align: left;
}
.faq-features {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.faq-features-container {
  align-items: center;
  justify-content: center;
}
.faq-faq2 {
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
.faq-container2 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.faq-pricing {
  flex: 0 0 auto;
  width: 100%;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.faq-banner {
  flex: 0 0 auto;
  width: 100%;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.faq-faq3 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.faq-faq-container {
  border: 2px dashed rgba(120, 120, 120, 0.4);
}
.faq-footer {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.faq-container3 {
  gap: var(--dl-space-space-unit);
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.faq-logo2 {
  font-size: 2em;
  font-family: "Cabin";
  font-weight: 700;
  line-height: 150%;
  text-transform: uppercase;
  text-decoration: none;
}
.faq-nav1 {
  flex: 0 0 auto;
  display: flex;
  margin-top: 0px;
  align-items: center;
  flex-direction: row;
}
.faq-home2 {
  margin-left: 0px;
  text-decoration: none;
}
.faq-faq4 {
  margin-left: var(--dl-space-space-unit);
  text-decoration: none;
}
.faq-plans-pricing2 {
  margin-left: var(--dl-space-space-unit);
  text-decoration: none;
}
.faq-portfolio2 {
  margin-left: var(--dl-space-space-unit);
  text-decoration: none;
}
.faq-resources2 {
  margin-left: var(--dl-space-space-unit);
  text-decoration: none;
}
.faq-contact2 {
  margin-left: var(--dl-space-space-unit);
}
.faq-separator {
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
.faq-container4 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.faq-text20 {
  font-size: 16px;
  font-family: "Cabin";
  font-weight: 400;
  line-height: 150%;
}
.faq-link {
  text-decoration: underline;
}
.faq-icon-group1 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.faq-link1 {
  display: contents;
}
.faq-icon10 {
  width: 24px;
  height: 24px;
  margin-right: var(--dl-space-space-twounits);
  text-decoration: none;
}
.faq-link2 {
  display: contents;
}
.faq-icon12 {
  width: 24px;
  height: 24px;
  margin-right: var(--dl-space-space-twounits);
  text-decoration: none;
}
.faq-link3 {
  display: contents;
}
.faq-icon14 {
  width: 24px;
  height: 24px;
  text-decoration: none;
}
@media(max-width: 991px) {
  .faq-hero1 {
    flex-direction: column;
  }
  .faq-container1 {
    align-items: center;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
    padding-right: 0px;
  }
  .faq-hero-heading {
    text-align: center;
  }
  .faq-text {
    text-align: center;
  }
  .faq-hero-sub-heading {
    text-align: center;
    padding-left: var(--dl-space-space-threeunits);
    padding-right: var(--dl-space-space-threeunits);
  }
  .faq-text17 {
    text-align: center;
    padding-left: var(--dl-space-space-threeunits);
    padding-right: var(--dl-space-space-threeunits);
  }
}
@media(max-width: 767px) {
  .faq-navbar-interactive {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .faq-desktop-menu {
    display: none;
  }
  .faq-burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .faq-home1 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .faq-faq1 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
  .faq-plans-pricing1 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
  .faq-portfolio1 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
  .faq-resources1 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
  .faq-contact1 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
  .faq-hero1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .faq-hero-sub-heading {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }
  .faq-text17 {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }
  .faq-faq2 {
    flex-direction: column;
  }
  .faq-footer1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .faq-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .faq-container4 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .faq-text20 {
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
@media(max-width: 479px) {
  .faq-navbar-interactive {
    padding: var(--dl-space-space-unit);
  }
  .faq-mobile-menu1 {
    padding: 16px;
  }
  .faq-hero1 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .faq-container1 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .faq-features-container {
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  .faq-footer1 {
    padding: var(--dl-space-space-unit);
  }
  .faq-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .faq-container4 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .faq-text20 {
    text-align: center;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
</style>
