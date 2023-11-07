<script lang="ts" setup>

</script>

<!-- <template>
    <div class="block">
        <div class="container">
            <div class="main__all">
                <div class="main__content__all">
                    <div class="main__content__left__all">
                        <p>
                            Bienvenue <span>Super Admin</span>
                        </p>
                        <div class="main_content_left_bottom">
                            <router-link to="/inscription_user">
                                Inscription
                             </router-link>
                            |<router-link to="/connexion">
                                Connexion
                             </router-link>
                        </div>
                        <h4>Mais n'oublie pas, de grands pouvoirs impliquent de grandes responsabilités.</h4>
                    </div>
                    <div class="main__content__right__all">
                        <ImageAcceuil />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template> -->

<template>
    <header class="header">
        <div class="container">
            <div class="header-content">
                <div class="header-logo">
                    <router-link to="">
                        student Management
                    </router-link>
                </div>
                <div class="navLinks">
                    <ul>
                        <li>
                            <router-link to="/inscription_user">
                                Inscription
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/connexion">
                                Connexion
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
    <div class="banner">
        <div class="container">
            <div class="banner-content">
                <div class="banner-title">
                    <h2 class="title_banner">WELCOME Super Admin!</h2>
                </div>
                <div class="banner-first-paragraphe">

                </div>
            </div>
        </div>
    </div>
</template>

<style>
.header {
    background-color: #002147;
}

.container {
    width: 1170px;
    margin: 0 auto;
    padding: 15px 0;
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header-logo a {
    color: #fff;
    text-decoration: none;
    font-size: 32px;
}

.navLinks ul {
    display: flex;
    gap: 15px;
    padding: 15px 0;
    list-style: none;
}

.navLinks ul li a {
    color: #fff;
    font-weight: bold;
    text-decoration: none;
}

.banner {
    background-image: url('/images/jeunes-etudiants-apprenant-ensemble-pendant-etude-groupe_23-2149211061.jpg');
    height: 95vh;
}

.banner-content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 87vh;
}

.banner-content .banner-title h2 {
    font-size: 45px;
    color: rgb(2, 2, 110);
}
</style>

<!-- <style>
.block {
    background-color: rgb(17, 17, 22);
    overflow-x: hidden;
    width: 100%;
    height: 100vh;
}

.main__all {
    display: flex;
    justify-content: center;
    align-items: center;
}

.main__content__all {
    display: flex;
    justify-content: center;
    align-items: center;
    --webkit-backdrop-filter: blur(4px);
    width: 100%;
    height: 100vh;
}

.container {
    padding: 0 15px;
    margin: 0 auto;
    max-width: 1140px;
    /*  background-color: red; */
}

a {
    text-decoration: none;
    color: black;
}


.main__content__left__all {
    padding-top: 20px;
    font-size: 50px;
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.main__content__left__all p {
    font-size: 60px;
    font-weight: 600;
}

.main__content__left__all span {
    color: transparent;
    -webkit-text-stroke: .7px white;
    font-size: 60px;
    background-image: linear-gradient(#1e80c2, #68c3ff);
    background-repeat: no-repeat;
    -webkit-background-clip: text;
    animation: homeBgText 6s linear infinite;
    animation-delay: 1s;
}


.main__content__left__all h4 {
    font-size: 40px;
    color: rgba(255, 255, 255, 0.534);
}

.main__content__left__all a {
    padding: 5px 15px;
    border-radius: 20rem;
    font-size: 15px;
    font-weight: 800;
    border: none;
    box-shadow: 0 0 5px #68c3ff;
    cursor: pointer;
    background-color: rgb(63, 61, 61);
    color: white;
}

.main__content__left__all a:hover {
    background-color: #68c3ff;
    color: black;
    box-shadow: 0 0 5px rgb(63, 61, 61);
}

.main_content_left_bottom {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 270px;
    gap: 10px;
}


.main__content__right__all {
    display: flex;
    justify-content: center;
    align-items: center;
}

@keyframes homeBgText {

    0%,
    10%,
    100% {
        background-position: -50rem 0;
    }

    65%,
    85% {
        background-position: 0 0;
    }
}
</style>   -->
