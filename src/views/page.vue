<template>
  <div class="page-container">
    <div class="page-header">
      <header
        data-thq="thq-navbar"
        class="navbarContainer page-navbar-interactive"
      >
        <a
          href="https://kristash.com"
          target="_blank"
          rel="noreferrer noopener"
          class="page-logo logo"
        >
          Kristash
        </a>
        <div data-thq="thq-navbar-nav" class="page-desktop-menu">
          <nav class="page-links">
            <router-link to="/" class="page-home bodySmall">Home</router-link>
            <router-link to="/faq" class="page-faq bodySmall">FAQ</router-link>
            <router-link to="/plans-pricing" class="page-plans-pricing bodySmall">
              Plans &amp; Pricing
            </router-link>
            <router-link to="/portfolio" class="page-portfolio bodySmall">
              Portfolio
            </router-link>
            <router-link to="/resources" class="page-resources bodySmall">
              Resources
            </router-link>
            <router-link to="/contact" class="page-contact bodySmall">
              Contact
            </router-link>
          </nav>
          <div class="page-buttons">
            <button class="page-login buttonFlat">Login</button>
            <button class="buttonFilled">Register</button>
          </div>
        </div>
        <div data-thq="thq-burger-menu" class="page-burger-menu">
          <svg viewBox="0 0 1024 1024" class="page-icon socialIcons">
            <path
              d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
            ></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" class="page-mobile-menu1 mobileMenu">
          <div class="page-nav">
            <div class="page-top">
              <span class="logo">ONLINE MARKETING AGENCY</span>
              <div data-thq="thq-close-menu" class="page-close-menu">
                <svg viewBox="0 0 1024 1024" class="page-icon02 socialIcons">
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                  ></path>
                </svg>
              </div>
            </div>
            <nav class="page-links1">
              <router-link to="/">Home</router-link>
              <router-link to="/faq" class="page-nav4 bodySmall">FAQ</router-link>
              <router-link to="/plans-pricing" class="page-nav2 bodySmall">
                Plans &amp; Pricing
              </router-link>
              <router-link to="/portfolio" class="page-nav3 bodySmall">
                Portfolio
              </router-link>
              <router-link to="/resources" class="page-nav5 bodySmall">
                Resources
              </router-link>
              <router-link to="/contact" class="page-nav51 bodySmall">
                Contact
              </router-link>
            </nav>
            <div class="page-buttons1">
              <button class="buttonFlat">Login</button>
              <button class="buttonFilled">Register</button>
            </div>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              class="page-icon04 socialIcons"
            >
              <path
                d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
              ></path></svg
            ><svg
              viewBox="0 0 877.7142857142857 1024"
              class="page-icon06 socialIcons"
            >
              <path
                d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
              ></path></svg
            ><svg
              viewBox="0 0 602.2582857142856 1024"
              class="page-icon08 socialIcons"
            >
              <path
                d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
              ></path>
            </svg>
          </div>
        </div>
      </header>
    </div>
    <div class="page-hero">
      <div class="page-hero1 heroContainer">
        <div class="page-container1">
          <h1 class="page-hero-heading heading1">404 Page</h1>
        </div>
      </div>
    </div>
    <div class="page-banner">
      <div class="page-banner1 bannerContainer">
        <h1 class="page-banner-heading">
          <span class="heading2">
            Woops! You&apos;ve reached this page in error. Press the button below
            to return to the homepage or select an option from the header or foot
            menu. :)
          </span>
          <br />
        </h1>
        <router-link to="/" class="page-banner-button buttonFilled">
          Back to Home
        </router-link>
        <span class="page-banner-sub-heading bodySmall">
          <span>
            <span>
              <span>
                At our online marketing agency, we offer a range of services to
                help businesses and startups thrive in the digital world. From
                stunning website designs to effective SEO strategies, we have the
                expertise to elevate your brand and drive results. Partner with us
                and take your online presence to new heights.
              </span>
              <span><span v-html="rawcy0x"></span></span>
            </span>
            <span>
              <span><span v-html="rawn6ri"></span></span>
              <span><span v-html="raww7ir"></span></span>
            </span>
          </span>
          <span>
            <span>
              <span><span v-html="rawzor1"></span></span>
              <span><span v-html="rawb176"></span></span>
            </span>
            <span>
              <span><span v-html="rawwjzv"></span></span>
              <span><span v-html="raw31fm"></span></span>
            </span>
          </span>
        </span>
      </div>
    </div>
    <div class="page-footer">
      <footer class="footerContainer page-footer1">
        <div class="page-container2">
          <a
            href="https://kristash.com"
            target="_blank"
            rel="noreferrer noopener"
            class="page-logo2"
          >
            Kristash
          </a>
          <nav class="page-nav1">
            <router-link to="/" class="page-home1 bodySmall">Home</router-link>
            <router-link to="/faq" class="page-faq1 bodySmall">FAQ</router-link>
            <router-link
              to="/plans-pricing"
              class="page-plans-pricing1 bodySmall"
            >
              Plans &amp; Pricing
            </router-link>
            <router-link to="/portfolio" class="page-portfolio1 bodySmall">
              Portfolio
            </router-link>
            <router-link to="/resources" class="page-resources1 bodySmall">
              Resources
            </router-link>
            <router-link to="/contact" class="page-contact1 bodySmall">
              Contact
            </router-link>
          </nav>
        </div>
        <div class="page-separator"></div>
        <div class="page-container3">
          <span class="page-text16">
            <span class="bodySmall">
              Copyright © 2024,
              <span v-html="rawq6t0"></span>
            </span>
            <a
              href="https://kristash.com"
              target="_blank"
              rel="noreferrer noopener"
              class="page-link"
            >
              Kristash
            </a>
            <span class="bodySmall">. All Rights Reserved.</span>
          </span>
          <div class="page-icon-group1">
            <a href="https://twitter.com/kristashinc" class="page-link1">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                class="page-icon10 socialIcons"
              >
                <path
                  d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
                ></path>
              </svg>
            </a>
            <a href="https://instagram.com/kristashinc" class="page-link2">
              <svg
                viewBox="0 0 877.7142857142857 1024"
                class="page-icon12 socialIcons"
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
              class="page-link3"
            >
              <svg
                viewBox="0 0 602.2582857142856 1024"
                class="page-icon14 socialIcons"
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
export default {
  name: 'Page',
  props: {},
  data() {
    return {
      rawcy0x: ' ',
      rawn6ri: ' ',
      raww7ir: ' ',
      rawzor1: ' ',
      rawb176: ' ',
      rawwjzv: ' ',
      raw31fm: ' ',
      rawq6t0: ' ',
    }
  },
  metaInfo: {
    title: '404 Page | Kristash',
    meta: [
      {
        name: 'description',
        content:
          'Elevate your online presence with Kristash, your trusted digital marketing agency in Omaha, NE. Drive results with expert SEO, PPC, social media, & web design.',
      },
      {
        property: 'og:title',
        content: '404 Page | Kristash',
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
.page-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.page-header {
  width: 100%;
  display: flex;
  z-index: 100;
  position: fixed;
  align-items: center;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}
.page-logo {
  text-decoration: none;
}
.page-desktop-menu {
  flex: 1;
  display: flex;
  justify-content: space-between;
}
.page-links {
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.page-home {
  transition: 0.3s;
  text-decoration: none;
}
.page-faq {
  transition: 0.3s;
  margin-left: var(--dl-space-space-twounits);
  text-decoration: none;
}
.page-plans-pricing {
  transition: 0.3s;
  margin-left: var(--dl-space-space-twounits);
  text-decoration: none;
}
.page-portfolio {
  transition: 0.3s;
  margin-left: var(--dl-space-space-twounits);
  text-decoration: none;
}
.page-resources {
  transition: 0.3s;
  margin-left: var(--dl-space-space-twounits);
  text-decoration: none;
}
.page-contact {
  transition: 0.3s;
  margin-left: var(--dl-space-space-twounits);
  text-decoration: none;
}
.page-buttons {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.page-login {
  margin-right: 32px;
}
.page-burger-menu {
  display: none;
}
.page-icon {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}
.page-mobile-menu1 {
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
.page-nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.page-top {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}
.page-close-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}
.page-icon02 {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}
.page-links1 {
  flex: 0 0 auto;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
.page-nav1 {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.page-nav4 {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.page-nav2 {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.page-nav3 {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.page-nav5 {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.page-nav51 {
  margin-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.page-buttons1 {
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.page-icon04 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.page-icon06 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.page-icon08 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.page-hero {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 96px;
  align-items: flex-start;
  justify-content: center;
}
.page-hero1 {
  height: 163px;
}
.page-container1 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.page-hero-heading {
  max-width: 800px;
  text-align: center;
}
.page-banner {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.page-banner1 {
  height: 1010px;
  background-color: #252f12;
}
.page-banner-heading {
  text-align: center;
}
.page-banner-button {
  text-decoration: none;
}
.page-banner-sub-heading {
  max-width: var(--dl-size-size-maxwidth);
  margin-top: var(--dl-space-space-twounits);
  text-align: center;
  margin-bottom: var(--dl-space-space-twounits);
}
.page-footer {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.page-container2 {
  gap: var(--dl-space-space-unit);
  display: flex;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.page-logo2 {
  font-size: 2em;
  font-family: "Cabin";
  font-weight: 700;
  line-height: 150%;
  text-transform: uppercase;
  text-decoration: none;
}
.page-nav1 {
  flex: 0 0 auto;
  display: flex;
  margin-top: 0px;
  align-items: center;
  flex-direction: row;
}
.page-home1 {
  margin-left: 0px;
  text-decoration: none;
}
.page-faq1 {
  margin-left: var(--dl-space-space-unit);
  text-decoration: none;
}
.page-plans-pricing1 {
  margin-left: var(--dl-space-space-unit);
  text-decoration: none;
}
.page-portfolio1 {
  margin-left: var(--dl-space-space-unit);
  text-decoration: none;
}
.page-resources1 {
  margin-left: var(--dl-space-space-unit);
  text-decoration: none;
}
.page-contact1 {
  margin-left: var(--dl-space-space-unit);
  text-decoration: none;
}
.page-separator {
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
.page-container3 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.page-text16 {
  font-size: 16px;
  font-family: "Cabin";
  font-weight: 400;
  line-height: 150%;
}
.page-link {
  text-decoration: underline;
}
.page-icon-group1 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.page-link1 {
  display: contents;
}
.page-icon10 {
  width: 24px;
  height: 24px;
  margin-right: var(--dl-space-space-twounits);
  text-decoration: none;
}
.page-link2 {
  display: contents;
}
.page-icon12 {
  width: 24px;
  height: 24px;
  margin-right: var(--dl-space-space-twounits);
  text-decoration: none;
}
.page-link3 {
  display: contents;
}
.page-icon14 {
  width: 24px;
  height: 24px;
  text-decoration: none;
}
@media(max-width: 991px) {
  .page-hero1 {
    flex-direction: column;
  }
  .page-container1 {
    align-items: center;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
    padding-right: 0px;
  }
  .page-hero-heading {
    text-align: center;
  }
  .page-banner-sub-heading {
    max-width: 100%;
  }
}
@media(max-width: 767px) {
  .page-navbar-interactive {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .page-desktop-menu {
    display: none;
  }
  .page-burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .page-nav1 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .page-nav4 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
  .page-nav2 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
  .page-nav3 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
  .page-nav5 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
  .page-nav51 {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
  .page-hero1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .page-banner1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .page-banner-sub-heading {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }
  .page-footer1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .page-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .page-container3 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .page-text16 {
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
@media(max-width: 479px) {
  .page-navbar-interactive {
    padding: var(--dl-space-space-unit);
  }
  .page-mobile-menu1 {
    padding: 16px;
  }
  .page-hero1 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .page-container1 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .page-banner1 {
    height: 714px;
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .page-footer1 {
    padding: var(--dl-space-space-unit);
  }
  .page-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .page-container3 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .page-text16 {
    text-align: center;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
</style>
