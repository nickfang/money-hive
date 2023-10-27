<script>
  // https://jtauber.github.io/articles/css-hexagon.html
</script>

<div class="hex-row">
  <div class="hex"/>
  <div class="hex"/>
  <div class="hex"/>
  <div class="hex"/>
</div>
<div class="hex-row even">
  <div class="hex"/>
  <div class="hex"/>
  <div class="hex"/>
  <div class="hex"/>
  <div class="hex"/>
</div>
<div class="hex-row">
  <div class="hex"/>
  <div class="hex"/>
  <div class="hex"/>
  <div class="hex"/>
</div>

<style>
  .hex:before {
    content: " ";
    width: 0; height: 0;
    border-bottom: 30px solid #6C6;
    border-left: 52px solid transparent;
    border-right: 52px solid transparent;
    position: absolute;
    top: -30px;
  }

  .hex {
    margin-top: 30px;
    width: 104px;
    height: 60px;
    background-color: #6C6;
    position: relative;
  }

  .hex:after {
    content: "";
    width: 0;
    position: absolute;
    bottom: -30px;
    border-top: 30px solid #6C6;
    border-left: 52px solid transparent;
    border-right: 52px solid transparent;
  }

  .hex {
    float: left;
    margin-left: 3px;
    margin-bottom: 3px;
  }

  .hex-row {
    clear: left;
    margin-left: 53px;
  }
  .hex-row.even {
    margin-left: 0px;
  }
</style>