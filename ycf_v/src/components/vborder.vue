<template>
	<div class="vborder">
		<div class="top"></div>
		<div class="right"></div>
		<div class="bottom"></div>
		<div class="left"></div>
	</div>
</template>
<style type="text/css" scoped>
.vborder
{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
}
.vborder .top
{
  position: absolute;
  left: 50%;
  transform: translateY(-50%);
  top: -0.1rem;
  background-color: red;
  height: .1rem;
  width: 0px;
  transition: all 0.6s ease-out;
}
.vborder .bottom
{
  position: absolute;
  left: 50%;
  transform: translateY(-50%);
  bottom: -0.1rem;
  background-color: red;
  height: .1rem;
  width: 0px;
  transition: all 0.6s ease-out;
}
.vborder:hover .top,.vborder:hover .bottom
{
  left: -0.1rem;
  transform: translateY(0);
  width:-moz-calc(100% + .2rem); 
  width:-webkit-calc(100% + .2rem); 
  width: calc(100% + .2rem);
}
.vborder .left
{
  position: absolute;
  top: 50%;
  transform: translateX(-50%);
  left: -0.1rem;
  background-color: red;
  height: 0px;
  width: .1rem;
  transition: all 0.6s ease-out;
}
.vborder .right
{
  position: absolute;
  top: 50%;
  transform: translateX(-50%);
  right: -0.1rem;
  background-color: red;
  height: 0px;
  width: .1rem;
  transition: all 0.6s ease-out;
}
.vborder:hover .right,.vborder:hover .left
{
  top: -0.1rem;
  transform: translateX(0);
  height:-moz-calc(100% + .2rem); 
  height:-webkit-calc(100% + .2rem); 
  height: calc(100% + .2rem);
}
</style>