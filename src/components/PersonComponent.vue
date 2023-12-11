<template>
  <div class="person_info">
    <div class="layout_width mx-auto">
      <img class="logo_person mx-auto " src="../assets/icons/profile.png" alt="">
      <h4 class="user_name flex justify-center">Rayan Adlardard</h4>
      <p class="user_profession_text flex justify-center">Font-end Developer</p>
      <div class="flex justify-around items-center social_media">
        <a class="follow_a" href=""><img src="../assets/icons/icons-facebook.svg" alt=""></a>
        <a class="follow_a" href=""><img src="../assets/icons/icons-instagram.svg" alt=""></a>
        <a class="follow_a" href=""><img src="../assets/icons/icons-twitter.svg" alt=""></a>
        <a class="follow_a" href=""><img src="../assets/icons/icons-linkedin.svg" alt=""></a>
        <a class="follow_a" href=""><img src="../assets/icons/icons-youtube.svg" alt=""></a>
        <a class="follow_a" href=""><img src="../assets/icons/icons-dribbble.svg" alt=""></a>
      </div>
      <hr>
    </div>

  </div>
</template>

<script setup>

</script>

<style scoped>
  .person_info {
    background: #FFF;
    width: 21%;
  }
  .layout_width {
    width: 220px;
  }
  .logo_person {
    margin-top: 50px;
    width: 150px;
    height: 150px;
  }
  .user_name {
    margin-top: 31px;
    color: #2B2B2B;
    /* H4 - 18px */
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 123.6%; /* 22.248px */
    text-transform: capitalize;
  }
  .user_profession_text{
    margin-top: 15px;
    color: #767676;
    font-kerning: none;
    font-feature-settings: 'calt' off;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 160% */
    text-transform: capitalize;
  }
  .social_media {
    margin-top: 15px;
    margin-bottom: 25px;
  }
  .follow_a {
    width: 24px;
    height: 24px;
    background: #FFB400;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>