<?php
session_start();
if(!$_SESSION['user']){
	header("Location: login.php");
	exit();
}
include("setting.php");
$user=$_SESSION['user'];
setcookie("lastpage", "one.php");
$last=(string)$_COOKIE['lastpage'];
?>
<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8"/>
	<link rel="stylesheet" href="css/style_<?=$tema?>.css"/>
	<title>Первая страница</title>
	<!--[if lt IE 9]> 
 	<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script> 
	<![endif]-->
</head>
<body>
	<header>
		<div class="logo"><h1><a href="one.php">Welcome, <?=$user?>!</a></h1></div>
		<form class="exit" method="post">
			<input class="exit" type="submit" name="exit" value="Выход">
		</form>
		<form class="color" method="post">
			<p>Выберите цветовую схему</p>
			<input type="submit" name="tema" value="lime-blue">
			<input type="submit" name="tema" value="winter">
			<input type="submit" name="tema" value="corn">
		</form>
	</header>
	<div class="content">
		<aside>
			<div class="news">
				<a href="two.php">
				<h2>Lorem ipsum.</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Accusamus nam adipisci velit magnam quam autem!</p>		
				</a>		
			</div>
			<div class="news">
				<a href="two.php">
				<h2>Est, obcaecati.</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
					Illo praesentium, eaque blanditiis delectus, illum odio!</p>
				</a>			
			</div>
			<div class="news">
				<a href="two.php">
				<h2>Dolore, unde.</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
					Facere porro excepturi sed, reiciendis voluptas nulla.</p>
				</a>
			</div>
			<div class="news">
				<a href="two.php">
				<h2>Quis, inventore.</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
					Totam sint quaerat itaque voluptatibus dolores recusandae.</p>		
				</a>
			</div>
		</aside>
		<article>
			<h1>Lorem ipsum dolor.</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
				Debitis ad quidem repudiandae quibusdam eveniet, incidunt provident 
				laboriosam animi, voluptatum eius recusandae doloribus dicta ex reiciendis 
				perspiciatis error quia tempora architecto, esse in est labore consequuntur 
				omnis! Ducimus aspernatur excepturi, architecto quo laudantium molestiae assumenda, 
				fugiat, reprehenderit quaerat temporibus rerum dolor tenetur magnam. Expedita, 
				assumenda totam cumque veniam maxime eum est omnis vero dicta neque iste, 
				cupiditate suscipit repudiandae perspiciatis quia.</p>
			<h1>Lorem ipsum dolor.</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
				Vel reprehenderit nesciunt fugiat obcaecati laudantium nobis dicta, dolor, 
				ex quas quod vero laboriosam non eius dolores reiciendis doloremque rem est 
				perspiciatis, nulla dolorum sit dignissimos consectetur sed? Aperiam aspernatur 
				ullam numquam, et. Beatae, minima repudiandae possimus rem aut a corporis ipsam 
				laborum, distinctio architecto sapiente, praesentium culpa in exercitationem vitae, 
				ad quis! Odio veritatis, voluptate aperiam quis. Facere labore quam quia.</p>
			<h1>Lorem ipsum dolor.</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, amet ab 
				praesentium ipsam, doloremque distinctio, illo neque modi recusandae voluptate 
				aspernatur. Numquam minus, laborum, iste ipsam, consequuntur fuga reiciendis totam 
				esse excepturi aut laboriosam aspernatur quo rem vitae delectus eum nulla. 
				Vitae earum tenetur fugiat, nulla cumque voluptatem minima magni dolores iste 
				accusantium atque eveniet ea pariatur tempora aliquam assumenda in ipsum deleniti, 
				neque delectus ipsam placeat ex! Soluta, nisi!</p>
		</article>
	</div>
	<footer>
		<p>&copy;Vetero4eg</p>
	</footer>
</body>
</html>