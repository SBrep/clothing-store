<template>
    <div class="foot">
        <div class="icons">
            <a target="_blank" href="https://github.com/SBrep"><img class="foot-icon" src="../../public/instagram.png"/></a>
            <a target="_blank" href="https://github.com/SBrep"><img class="foot-icon" src="../../public/facebook.png"/></a>
            <a target="_blank" href="https://github.com/SBrep/"><img class="foot-icon" src="../../public/vkontakte.png"/></a>
        </div>
        <div class="info-back">
            
        </div>
    </div>
</template>

<script>
    export default {
      name: "Footbar",  
    }
</script>

<style scoped>
.icons {
    height: 50px;
    display: flex;
    border-top: 1px solid rgba(0, 0, 0, 0.3);
    align-items: center;
    justify-content: center;
}
.icons > * {
    margin: 20px;
}

.info-back {
    position: relative;
    width: 0; 
    height: 0; 
    border-bottom: 100px solid rgba(10, 29, 78, 0.092);;
    border-right: 98vw solid transparent;
}
.foot-icon {
    width: 22px;
    height: 22px;
}
</style>