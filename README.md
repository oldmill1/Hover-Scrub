### How to user Hover Scrub

1. Create an image DOM object on your page. 

```
<img src="./images/TheWaldorfAstoria01-490x300.jpeg" class="main_image" />
```

2. Insert your gallery right into the image tag by creating a data-images attribute. 

```
<img src="./images/TheWaldorfAstoria01-490x300.jpeg" data-images="./images/TheWaldorfAstoria01-490x300.jpeg, ./images/TheWaldorfAstoria02-490x300.jpeg, ./images/TheWaldorfAstoria03-490x300.jpeg, ./images/TheWaldorfAstoria05-480x300.jpeg, ./images/LittleItaly01-490x300.jpeg, ./images/LittleItaly02-490x300.jpeg, ./images/LittleItaly03-490x300.jpeg, ./images/LittleItaly04-490x300.jpeg, ./images/LittleItaly05-490x300.jpeg" class="main_image" />
```

3. Link jQuery and HoverScrub. 

```
<script type="text/javascript" src="jquery.js"></script>
<script type="text/javascript" src="hoverscrub.js"></script>
```

4. Activate HoverScrub. 

```
<script type="text/javascript">
$(".main_image").hoverScrub(); 
</script>
```