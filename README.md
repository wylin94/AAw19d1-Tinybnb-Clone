<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->







<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/wylin94/AAw19d1-Tinybnb-Clone">
    <img src="https://raw.githubusercontent.com/wylin94/AAw19d1-Tinybnb-Clone/main/react-app/src/components/NavBar/logo.jpeg" alt="Logo" width="180" height=200">
    
  </a>


<h3 align="center">Tinybnb</h3>

  <p align="center">
    Airbnb Clone
    <br />
    <a href="https://github.com/wylin94/AAw19d1-Tinybnb-Clone/wiki"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://wyl-tinybnb.herokuapp.com/">View Demo / Live link</a>
    ·
    <a href="https://github.com/wylin94/AAw19d1-Tinybnb-Clone/issues">Report Bug</a>
    ·
    <a href="https://github.com/wylin94/AAw19d1-Tinybnb-Clone/issues">Request Feature</a>
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
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Tinybnb, a full stack Airbnb clone where users can book and host places, and give review to places they’ve stayed.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [React-icons](https://react-icons.github.io/react-icons/)
* [Flask](https://flask.palletsprojects.com/en/2.0.x/)
* [SQLAlchemy](https://www.sqlalchemy.org/)
* [PostgreSQL](https://www.postgresql.org/)
* [WTForms](https://wtforms.readthedocs.io/en/3.0.x/)
* [Docker](https://www.docker.com/)
* [Heroku](https://www.heroku.com/)


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation


1. Clone this repository (only this branch)

   ```bash
   git clone https://github.com/wylin94/AAw19d1-Tinybnb-Clone.git
   ```

2. Install dependencies

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```



<p align="right">(<a href="#top">back to top</a>)</p>




<!-- USAGE EXAMPLES -->
## Usage

<!-- Signup for a new account, or login to a pre existing account. 

<img src="URL" alt="" width="900" height="450">


Post a new hosting related question.

<img src="URL" alt="" width="900" height="450">


Booking or modifiy exsiting booking.

<img src="URL" alt="" width="900" height="750">


Feel free to comment and provide rating on a hosting!

<img src="URL" alt="" width="900" height="750">
 -->



_For more examples, please refer to the [Documentation](https://github.com/wylin94/AAw19d1-Tinybnb-Clone/wiki)_

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

Adam Guan - [Linkedin](https://www.linkedin.com/in/adam-g-86922aa0/) - [GitHub](https://github.com/AdamHGuan)
</br>

Huan Ai - [Linkedin](https://www.linkedin.com/in/huan-ai/) - [GitHub](https://github.com/Huan4Ai)
</br>

Jack Lin - [Linkedin](https://www.linkedin.com/in/wylin94/) - [GitHub](https://github.com/wylin94)
</br>

Lee Carr - [GitHub](https://github.com/Lee6413)
</br>

Project Link: [https://wyl-tinybnb.herokuapp.com/](https://wyl-tinybnb.herokuapp.com/)

<p align="right">(<a href="#top">back to top</a>)</p>







<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png

