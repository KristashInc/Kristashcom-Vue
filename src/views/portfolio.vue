<template>
  <div class="portfolio-container">
    <div class="portfolio-header">
      <header
        data-thq="thq-navbar"
        class="navbarContainer portfolio-navbar-interactive"
      >
        <a
          href="https://kristash.com"
          target="_blank"
          rel="noreferrer noopener"
          class="portfolio-logo logo"
        >
          Kristash
        </a>
        <div data-thq="thq-navbar-nav" class="portfolio-desktop-menu">
          <nav class="portfolio-links">
            <router-link to="/" class="portfolio-home bodySmall">
              Home
            </router-link>
            <router-link to="/faq" class="portfolio-faq bodySmall">
              FAQ
            </router-link>
            <router-link
              to="/plans-pricing"
              class="portfolio-plans-pricing bodySmall"
            >
              Plans &amp; Pricing
            </router-link>
            <router-link to="/portfolio" class="portfolio-portfolio bodySmall">
              Portfolio
            </router-link>
            <router-link to="/resources" class="portfolio-resources bodySmall">
              Resources
            </router-link>
            <router-link to="/contact" class="portfolio-contact bodySmall">
              Contact
            </router-link>
          </nav>
          <div class="portfolio-buttons">
            <button class="portfolio-login buttonFlat">Login</button>
            <button class="buttonFilled">Register</button>
          </div>
        </div>
        <div data-thq="thq-burger-menu" class="portfolio-burger-menu">
          <svg viewBox="0 0 1024 1024" class="portfolio-icon socialIcons">
            <path
              d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
            ></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" class="portfolio-mobile-menu1 mobileMenu">
          <div class="portfolio-nav">
            <div class="portfolio-top">
              <span class="logo">ONLINE MARKETING AGENCY</span>
              <div data-thq="thq-close-menu" class="portfolio-close-menu">
                <svg viewBox="0 0 1024 1024" class="portfolio-icon02 socialIcons">
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                  ></path>
                </svg>
              </div>
            </div>
            <nav class="portfolio-links1">
              <router-link to="/">Home</router-link>
              <router-link to="/faq" class="portfolio-nav4 bodySmall">
                FAQ
              </router-link>
              <router-link to="/plans-pricing" class="portfolio-nav2 bodySmall">
                Plans &amp; Pricing
              </router-link>
              <router-link to="/portfolio" class="portfolio-nav3 bodySmall">
                Portfolio
              </router-link>
              <router-link to="/resources" class="portfolio-nav5 bodySmall">
                Resources
              </router-link>
              <router-link to="/contact" class="portfolio-nav51 bodySmall">
                Contact
              </router-link>
            </nav>
            <div class="portfolio-buttons1">
              <button class="buttonFlat">Login</button>
              <button class="buttonFilled">Register</button>
            </div>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              class="portfolio-icon04 socialIcons"
            >
              <path
                d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
              ></path></svg
            ><svg
              viewBox="0 0 877.7142857142857 1024"
              class="portfolio-icon06 socialIcons"
            >
              <path
                d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
              ></path></svg
            ><svg
              viewBox="0 0 602.2582857142856 1024"
              class="portfolio-icon08 socialIcons"
            >
              <path
                d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
              ></path>
            </svg>
          </div>
        </div>
      </header>
    </div>
    <div class="portfolio-hero">
      <div class="portfolio-hero1 heroContainer">
        <div class="portfolio-container1">
          <h1 class="portfolio-hero-heading heading1">Portfolio</h1>
        </div>
      </div>
    </div>
    <div class="portfolio-faq1">
      <div class="faqContainer">
        <div class="portfolio-faq2">
          <div class="portfolio-container2">
            <span class="overline">
              <span>FAQ</span>
              <br />
            </span>
            <h2 class="portfolio-text03 heading2">Common Questions</h2>
            <span class="portfolio-text04 bodyLarge">
              <span>Here are some of the most common questions that we get.</span>
              <br />
            </span>
          </div>
          <div class="portfolio-container3">
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
    <div class="portfolio-footer">
      <footer class="footerContainer portfolio-footer1">
        <div class="portfolio-container4">
          <a
            href="https://kristash.com"
            target="_blank"
            rel="noreferrer noopener"
            class="portfolio-logo2"
          >
            Kristash
          </a>
          <nav class="portfolio-nav1">
            <router-link to="/" class="portfolio-home1 bodySmall">
              Home
            </router-link>
            <router-link to="/faq" class="portfolio-faq3 bodySmall">
              FAQ
            </router-link>
            <router-link
              to="/plans-pricing"
              class="portfolio-plans-pricing1 bodySmall"
            >
              Plans &amp; Pricing
            </router-link>
            <router-link to="/portfolio" class="portfolio-portfolio1 bodySmall">
              Portfolio
            </router-link>
            <router-link to="/resources" class="portfolio-resources1 bodySmall">
              Resources
            </router-link>
            <router-link to="/contact" class="portfolio-contact1 bodySmall">
              Contact
            </router-link>
          </nav>
        </div>
        <div class="portfolio-separator"></div>
        <div class="portfolio-container5">
          <span class="portfolio-text07">
            <span class="bodySmall">
              Copyright © 2024,
              <span v-html="rawoa2t"></span>
            </span>
            <a
              href="https://kristash.com"
              target="_blank"
              rel="noreferrer noopener"
              class="portfolio-link"
            >
              Kristash
            </a>
            <span class="bodySmall">. All Rights Reserved.</span>
          </span>
          <div class="portfolio-icon-group1">
            <a href="https://twitter.com/kristashinc" class="portfolio-link1">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                class="portfolio-icon10 socialIcons"
              >
                <path
                  d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
                ></path>
              </svg>
            </a>
            <a href="https://instagram.com/kristashinc" class="portfolio-link2">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                class="portfolio-icon12 socialIcons"
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
              class="portfolio-link3"
            >
              <svg
                viewBox="0 0 602.2582857142856 1024"
                class="portfolio-icon14 socialIcons"
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
  name: 'Portfolio',
  props: {},
  components: {
    AppQuestion1,
  },
  data() {
    return {
      rawoa2t: ' ',
    }
  },
  metaInfo: {
    title: 'Portfolio | Kristash',
    meta: [
      {
        name: 'description',
        content:
          'Elevate your online presence with Kristash, your trusted digital marketing agency in Omaha, NE. Drive results with expert SEO, PPC, social media, & web design.',
      },
      {
        property: 'og:title',
        content: 'Portfolio | Kristash',
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
.portfolio-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.portfolio-header {
  width: 100%;
  display: flex;
  z-index: 100;
  position: fixed;
  align-items: center;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}
.portfolio-logo {
  text-decoration: none;
}
.portfolio-desktop-menu {
  flex: 1;
  display: flex;
  justify-content: space-between;
}
.portfolio-links {
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.portfolio-home {
  transition: 0.3s;
  text-decoration: none;
}
.portfolio-faq {
  transition: 0.3s;
  margin-left: var(--dl-space-space-twounits);
  text-decoration: none;
}
.portfolio-plans-pricing {
  transition: 0.3s;
  margin-left: var(--dl-space-space-twounits);
  text-decoration: none;
}
.portfolio-portfolio {
  transition: 0.3s;
  margin-left: var(--dl-space-space-twounits);
  text-decoration: none;
}
.portfolio-resources {
  transition: 0.3s;
  margin-left: var(--dl-space-space-twounits);
  text-decoration: none;
}
.portfolio-contact {
  transition: 0.3s;
  margin-left: var(--dl-space-space-twounits);
  text-decoration: none;
}
.portfolio-buttons {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.portfolio-login {
  margin-right: 32px;
}
.portfolio-burger-menu {
  display: none;
}
.portfolio-icon {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}
.portfolio-mobile-menu1 {
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
.portfolio-nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.portfolio-top {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}
.portfolio-close-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}
.portfolio-icon02 {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}
.portfolio-links1 {
  flex: 0 0 auto;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
.portfolio-nav1 {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.portfolio-nav4 {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.portfolio-nav2 {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.portfolio-nav3 {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.portfolio-nav5 {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.portfolio-nav51 {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.portfolio-buttons1 {
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.portfolio-icon04 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.portfolio-icon06 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.portfolio-icon08 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.portfolio-hero {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 96px;
  align-items: flex-start;
  justify-content: center;
}
.portfolio-hero1 {
  height: 123px;
}
.portfolio-container1 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.portfolio-hero-heading {
  max-width: 800px;
  text-align: center;
}
.portfolio-faq1 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.portfolio-faq2 {
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
.portfolio-container2 {
  display: flex;
  max-width: 35%;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.portfolio-text03 {
  margin-bottom: var(--dl-space-space-oneandhalfunits);
}
.portfolio-text04 {
  text-align: left;
}
.portfolio-container3 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.portfolio-footer {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.portfolio-container4 {
  gap: var(--dl-space-space-unit);
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.portfolio-logo2 {
  font-size: 2em;
  font-family: "Cabin";
  font-weight: 700;
  line-height: 150%;
  text-transform: uppercase;
  text-decoration: none;
}
.portfolio-nav1 {
  flex: 0 0 auto;
  display: flex;
  margin-top: 0px;
  align-items: center;
  flex-direction: row;
}
.portfolio-home1 {
  margin-left: 0px;
  text-decoration: none;
}
.portfolio-faq3 {
  margin-left: var(--dl-space-space-unit);
  text-decoration: none;
}
.portfolio-plans-pricing1 {
  margin-left: var(--dl-space-space-unit);
  text-decoration: none;
}
.portfolio-portfolio1 {
  margin-left: var(--dl-space-space-unit);
  text-decoration: none;
}
.portfolio-resources1 {
  margin-left: var(--dl-space-space-unit);
  text-decoration: none;
}
.portfolio-contact1 {
  margin-left: var(--dl-space-space-unit);
  text-decoration: none;
}
.portfolio-separator {
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
.portfolio-container5 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.portfolio-text07 {
  font-size: 16px;
  font-family: "Cabin";
  font-weight: 400;
  line-height: 150%;
}
.portfolio-link {
  text-decoration: underline;
}
.portfolio-icon-group1 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.portfolio-link1 {
  display: contents;
}
.portfolio-icon10 {
  width: 24px;
  height: 24px;
  margin-right: var(--dl-space-space-twounits);
  text-decoration: none;
}
.portfolio-link2 {
  display: contents;
}
.portfolio-icon12 {
  width: 24px;
  height: 24px;
  margin-right: var(--dl-space-space-twounits);
  text-decoration: none;
}
.portfolio-link3 {
  display: contents;
}
.portfolio-icon14 {
  width: 24px;
  height: 24px;
  text-decoration: none;
}
@media(max-width: 991px) {
  .portfolio-hero1 {
    flex-direction: column;
  }
  .portfolio-container1 {
    align-items: center;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
    padding-right: 0px;
  }
  .portfolio-hero-heading {
    text-align: center;
  }
  .portfolio-text04 {
    text-align: center;
    padding-left: var(--dl-space-space-threeunits);
    padding-right: var(--dl-space-space-threeunits);
  }
}
@media(max-width: 767px) {
  .portfolio-navbar-interactive {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .portfolio-desktop-menu {
    display: none;
  }
  .portfolio-burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .portfolio-nav1 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .portfolio-nav4 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
  .portfolio-nav2 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
  .portfolio-nav3 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
  .portfolio-nav5 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
  .portfolio-nav51 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
  .portfolio-hero1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .portfolio-faq2 {
    flex-direction: column;
  }
  .portfolio-container2 {
    max-width: 100%;
    align-self: center;
    align-items: center;
    justify-content: center;
  }
  .portfolio-text04 {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }
  .portfolio-footer1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .portfolio-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .portfolio-container5 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .portfolio-text07 {
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
@media(max-width: 479px) {
  .portfolio-navbar-interactive {
    padding: var(--dl-space-space-unit);
  }
  .portfolio-mobile-menu1 {
    padding: 16px;
  }
  .portfolio-hero1 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .portfolio-container1 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .portfolio-footer1 {
    padding: var(--dl-space-space-unit);
  }
  .portfolio-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .portfolio-container5 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .portfolio-text07 {
    text-align: center;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
</style>
