<template>
  <div class="text-center mx-auto">
    <svg
      width="46"
      height="45"
      viewBox="0 0 46 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.5"
        d="M23 0.416626C18.6323 0.416626 14.3627 1.71179 10.7312 4.13834C7.09957 6.56489 4.2691 10.0138 2.59766 14.049C0.926225 18.0842 0.488901 22.5245 1.34099 26.8082C2.19308 31.092 4.29632 35.0268 7.38472 38.1152C10.4731 41.2037 14.408 43.3069 18.6918 44.159C22.9755 45.0111 27.4157 44.5737 31.4509 42.9023C35.4861 41.2309 38.9351 38.4004 41.3616 34.7688C43.7882 31.1372 45.0833 26.8676 45.0833 22.5C45.0833 19.5999 44.5121 16.7283 43.4023 14.049C42.2925 11.3698 40.6659 8.93531 38.6153 6.88469C36.5646 4.83406 34.1302 3.20741 31.4509 2.09762C28.7717 0.987829 25.9 0.416626 23 0.416626V0.416626ZM23 40.1666C19.5059 40.1666 16.0902 39.1305 13.1849 37.1893C10.2797 35.248 8.01528 32.4889 6.67813 29.2607C5.34098 26.0325 4.99112 22.4804 5.67279 19.0534C6.35447 15.6264 8.03705 12.4785 10.5078 10.0077C12.9785 7.53701 16.1264 5.85443 19.5534 5.17275C22.9804 4.49108 26.5326 4.84094 29.7607 6.17809C32.9889 7.51524 35.7481 9.77962 37.6893 12.6849C39.6305 15.5902 40.6667 19.0058 40.6667 22.5C40.6667 27.1855 38.8054 31.679 35.4922 34.9922C32.1791 38.3053 27.6855 40.1666 23 40.1666V40.1666Z"
        fill="white"
      />
      <path
        d="M40.6667 22.5H45.0834C45.0834 19.5999 44.5122 16.7283 43.4024 14.049C42.2926 11.3698 40.6659 8.93531 38.6153 6.88469C36.5647 4.83406 34.1302 3.20741 31.4509 2.09762C28.7717 0.987828 25.9 0.416626 23 0.416626V4.83329C27.6855 4.83329 32.1791 6.6946 35.4922 10.0077C38.8054 13.3209 40.6667 17.8145 40.6667 22.5Z"
        fill="white"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 23 22"
          to="360 23 22"
          dur="0.5s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  </div>
</template>

<script>
export default {
  name: "PreloaderVue",
  setup() {
    return {};
  },
};
</script>

<style lang="css" scoped>
svg {
  /* position: relative; */
  /* width: fit-content;
  display: inline; */
}

.non-animated-fill {
}
.animated-fill {
}

@-webkit-keyframes clockwise {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes clockwise {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes donut-rotate {
  0% {
    -webkit-transform: rotate(0);
  }
  50% {
    -webkit-transform: rotate(-140deg);
  }
  100% {
    -webkit-transform: rotate(0);
  }
}
@keyframes donut-rotate {
  0% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(-140deg);
  }
  100% {
    transform: rotate(0);
  }
}
</style>
