<script lang="ts" setup>
import AsideBarLogo from '../DashboardLayout/AsideBarLogo.vue';
</script>

<template>
        <div class="container">
            <div class="main_content">
                <div class="main_content_top">
                    <div class="main_content_top_left">
                        <p>Super <span>Admin</span></p>
                    </div>
                    <div class="main_content_top_right">
                        <AsideBarLogo />
                        <AsideBarLogo />
                        <AsideBarLogo />
                    </div>
                </div>
                <div class="main_content_middle">
                    <div class="dashbord__card__content">
                        <div class="card__box">
                            <div class="card__icone">
                                <AsideBarLogo />
                            </div>
                            <div class="card__number">
                                <h3 id="seles_total">9999</h3>
                                <p>Nombre total d'étudiants</p>
                            </div>
                        </div>
                        <div class="card__box">
                            <div class="card__icone">
                                <AsideBarLogo />
                            </div>
                            <div class="card__number">
                                <h3 id="cost_total">9999</h3>
                                <p>Nombre total des matières</p>
                            </div>
                        </div>

                        <div class="card__box">
                            <div class="card__icone">
                                <AsideBarLogo />
                            </div>
                            <div class="card__number">
                                <h3 id="product_seles">Rencontre avec le parrain</h3>
                                <p>Prochain évènement</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<style scoped>
* {
    position: relative;
    margin: 0;
    padding: 0;
    color: white;
    font-size: 16px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: rgb(17, 17, 22) ;
}

a {
    text-decoration: none;
    color: black;
}

ul li {
    list-style-type: none;
}

body {
    width: 100%;
    padding: 0;
    margin: 0;
    overflow-x: hidden;
}

.container {
    padding: 20px 15px;
    margin: 0 auto;
    max-width: 1140px;
}



.main_content {
    color: white;
}

.main_content_middle{
    padding-top: 20px;
}

.main_content_top {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.main_content_top_left {}

.main_content_top_left p {
    font-size: 30px;
    font-weight: 700;
}

.main_content_top_left span {
    font-size: 30px;
    color: rgb(0, 195, 255);
}


.dashbord__card__content {
    padding: 15px 0;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 25px;
}



.card__box {
    display: flex;
    width: 237px;
    padding: 12px 13px;
    border-radius: 4px;
    background-color: rgb(19, 18, 18);
    box-shadow: 0 0 5px #68c3ff;
    align-items: center;
    justify-content: space-between;
    align-items: center;
    border-left: 4px solid rgb(0, 195, 255);
}

.card__icone {
    border-radius: 6px;
    height: 40px;
    width: 40px;
    overflow: hidden;
}
</style>