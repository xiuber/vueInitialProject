<template>
  <div class="loading">
    <div class="svg-wrapper">
      <svg viewBox="-102 -102 204 204" xmlns="http://www.w3.org/2000/svg" class="svg">
        <g fill="none" stroke-width="4">
          <path d="M 0,-100 A 100,100 0 1 0 0,100" stroke="#fff" />
          <path d="M 0,100 A 100,100 0 0 0 100,0" stroke="url(#gradient)" />
        </g>
        <defs>
          <linearGradient id="gradient" x1="0" y1="1" x2="1" y2="0">
            <stop stop-color="#fff" />
            <stop offset="100%" stop-color="#fff" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>
<style scoped>
  .loading{
    position: fixed;
    width: 60px;
    height: 60px;
    top: 50%;
    left: 50%;
    margin-left: -30px;
    margin-top: -30px;
    z-index: 6;
    background-color: #c2c2c2;
    border-radius: 30px;
  }
  .svg-wrapper{
    width: 48px;
    height: 48px;
    margin-top: 6px;
    margin-left: 6px;
    background: url("./lu.png") no-repeat center;
    background-size: 20px auto;
  }
  .svg{
    box-sizing: border-box;
  }
  g {
    animation: loading linear 2s infinite;
  }

  @keyframes loading {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
