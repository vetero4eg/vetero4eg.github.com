<?php
session_start();
if(!$_SESSION['user']){
	header("Location: login.php");
	exit();
}
include("setting.php");
$user=$_SESSION['user'];
setcookie("lastpage", "two.php");
$last=(string)$_COOKIE['lastpage'];
?>
<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8"/>
	<link rel="stylesheet" href="css/style_<?=$tema?>.css"/>
	<title>Вторая страница</title>
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
			<h2>Lorem ipsum dolor sit.</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore quibusdam commodi possimus, perferendis doloribus dicta aperiam consequuntur illo voluptas hic repellat a quam nemo temporibus neque impedit aliquam aspernatur, asperiores vitae. Magnam commodi dolorum architecto, dolor! Magni perspiciatis, sint, molestiae, pariatur optio praesentium explicabo culpa, reiciendis nostrum neque officiis excepturi debitis minima atque temporibus delectus vitae quam suscipit quas. Perspiciatis dicta dolorem ipsam, odio, eius soluta aspernatur libero nostrum dolorum delectus, sit incidunt vel magnam. Aspernatur, placeat debitis, hic delectus saepe recusandae optio? Aspernatur cum, natus autem placeat labore voluptate est, quo beatae ad facilis fugit doloremque quaerat vitae voluptatum sunt minima. Cum amet nostrum quam possimus, quisquam aliquid, unde alias quos doloremque incidunt, iure soluta facere aspernatur dolore ea obcaecati provident quas quibusdam ad. Beatae impedit, amet repudiandae maiores, nihil animi, ex magnam mollitia illo accusamus qui dicta earum! Tempore, aliquid reprehenderit blanditiis incidunt ex nemo, debitis fugiat expedita delectus ipsum vitae fugit nostrum soluta hic dicta. Quibusdam perferendis, consequuntur totam sint eos laboriosam voluptates alias asperiores cumque dolor amet libero ducimus, repellat doloribus ut assumenda distinctio nemo a aspernatur expedita fuga iste voluptatem repellendus numquam! Illo consectetur, commodi quo autem tenetur ipsam quidem optio. Soluta, asperiores, omnis. Eligendi incidunt saepe, dignissimos perferendis vero laborum dolor repellat labore in atque consequatur illum quos, distinctio quam rem tenetur quis commodi blanditiis officia? Ut amet corporis aspernatur molestiae perspiciatis, temporibus. Porro ipsum neque nostrum officia nam officiis repellendus distinctio nobis quis sunt minima alias culpa magni adipisci unde excepturi commodi itaque, rerum odit consequuntur possimus molestiae sed. Quia ea, doloribus eaque corrupti at perspiciatis voluptates ex! Expedita dolor, repudiandae delectus beatae cumque dolorem, autem harum numquam recusandae assumenda voluptatem mollitia ad totam porro earum quos, amet optio doloremque distinctio qui modi deleniti maxime, veritatis officia. Aut vitae ad dolorem ut consectetur.</p>
		</article>
	</div>
	<footer>
		<p>&copy;Vetero4eg</p>
	</footer>
</body>
</html>