<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
[![Netlify Status](https://api.netlify.com/api/v1/badges/721f61ac-18bd-47bd-a48a-77cc66f64f54/deploy-status)](https://app.netlify.com/sites/stalwart-cupcake-b2153c/deploys)



<!-- PROJECT LOGO -->
<br />

<div align="center">
  <a href="https://github.com/hcduffey/express-secure-client">
    <img src="public/images/logo.png" alt="Logo" width="80" height="80">
  </a>
</div>

<div align="center">
  
<h3 align="center">Express Secure</h3>

  <p align="center">
    An API-driven SPA written using ReactJS that provides users with the ability to perform static analysis scans of their public NodeJS Express GitHub repositories.
    <br />
    <a href="https://github.com/hcduffey/express-secure-client"><strong>Explore the code »</strong></a>
    <br />
    <br />
    <a href="https://main--stalwart-cupcake-b2153c.netlify.app/">View Demo</a>
    ·
    <a href="https://github.com/hcduffey/express-secure-client/issues">Report Bug</a>
    ·
    <a href="https://github.com/hcduffey/express-secure-api">Explore Backend API code</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](public/images/screen_shot.png)

Express Secure is a single-page application that interacts with an RESTful API to perform identify software vulnerabilities in NodeJS Express repositories. The application allows the user to specify a GitHub account and import the repositories and branches related to that account. A branch can be selected to perform a scan and return the identified vulnerabilities.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

* [https://reactjs.org/](ReactJS)
* [https://fontawesome.com/v5/docs/web/use-with/react](FontAwesome)
* [https://react-bulma.dev/en](Bulma)
* [https://www.djangoproject.com/](Django)
* [https://github.com/ajinabraham/njsscan/](NJSSCAN)
* [https://docs.github.com/en/rest/](GitHubAPI)


<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

The client requires the backend API [https://github.com/hcduffey/express-secure-api](GitHubAPI) to work.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/hcduffey/express-secure-client.git
   ```
2. Install the dependencies
   ```sh
   npm i
   ```
3. Run it
   ```sh
   npm start
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

You must first import or select an existing GitHub account by clicking the person button on the right-hand side of the navigation bar.

### Initiating a Scan

Select one of the imported repositories from the drop-down, and click the sync button to list the branches for that repository. Click the desired branch to scan, and the press the 'New Scan' button. The vulnerability results will be returned in the main table. You can download a CSV file with the details of the scan results and get an overview of the results.

### Removing GitHub Accounts

Click the toolbox button on the right-hand side of the nav bar. You will be presented with a list of the currently imported GitHub accounts. Click the trashcan icon next to the account you want to remove to delete it. This will also remove any repositories, branches, scans, and vulnerabilities associated with that account.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

- [ ] Provide users with some identifier for repositories that are NodeJS Express applications to show that they can be scanned with useful results
- [ ] The currently used scanning package will timeout or generate errors for larger repositories. Either address these limitations, or change to a different scanning package (currently using NodeJSScan).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Cliff Duffey - [@cliffduffey2](https://twitter.com/cliffduffey2)

Project Link: [https://github.com/hcduffey/express-secure-client](https://github.com/hcduffey/express-secure-client)

API Project Link: [https://github.com/hcduffey/express-secure-api](https://github.com/hcduffey/express-secure-api)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Best-README-Template](https://github.com/othneildrew/Best-README-Template)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/hcduffey/express-secure-client.svg?style=for-the-badge
[contributors-url]: https://github.com/hcduffey/express-secure-client/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/hcduffey/express-secure-client.svg?style=for-the-badge
[forks-url]: https://github.com/hcduffey/express-secure-client/network/members
[stars-shield]: https://img.shields.io/github/stars/hcduffey/express-secure-client.svg?style=for-the-badge
[stars-url]: https://github.com/hcduffey/express-secure-client/stargazers
[issues-shield]: https://img.shields.io/github/issues/hcduffey/express-secure-client.svg?style=for-the-badge
[issues-url]: https://github.com/hcduffey/express-secure-client/issues
[license-shield]: https://img.shields.io/github/license/hcduffey/express-secure-client.svg?style=for-the-badge
[license-url]: https://github.com/hcduffey/express-secure-client/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/cduffey
[product-screenshot]: public/images/screen_shot.png