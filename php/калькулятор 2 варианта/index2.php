
<?php
	$p1=htmlspecialchars($POST_["p1"]);
	$p2=htmlspecialchars($POST["p2"]);
	if(isset($_POST['p1']) && isset($_POST['p2']) && is_numeric($_POST['p1']) && is_numeric($_POST['p2'])){
		$p1=$_POST['p1'];
		$p2=$_POST['p2'];
		$oper=$_POST['operation'];
		if (isset($_POST['plus'])) {
			$result=$p1+$p2;
			$s="+";
		} elseif(isset($_POST['minus'])){
			$result=$p1-$p2;
			$s="-";
		} elseif(isset($_POST['mult'])){
			$result=$p1*$p2;
			$s="*";	
		} elseif(isset($_POST['div'])){
			$s="/";
			if($p2!=0){
			$result=$p1/$p2;}
			else $result="На ноль делить нельзя";
			} elseif(isset($_POST['mod'])){
			$s="%";
			if($p2!=0){
			$result=$p1%$p2;}
			else $result="На ноль делить нельзя";
		} elseif(isset($_POST['reset'])){
			$p1=$p2=$result=0; $s="...";
		} else {
			$s="...";
			$result= "Выберите одну из операций";
		}
	}else{
		$s="...";
		$result = "Параметры некорректны";
	}
?>
<html>
	<head>
		<title>Calculator</title>
	</head>
	<body>
		<form method="post">
			<input type="text" name="p1" value="<?=$p1?>"> 
			<?=$s?>
			<input type="text" name="p2" value="<?=$p2?>">
			<span>=</span>
			<input type="text" value="<?=$result?>">
			<br><br>
			<input type="submit" name="plus" value="+">
			<input type="submit" name="minus" value="-">
			<input type="submit" name="mult" value="*">
			<input type="submit" name="div" value="/">
			<input type="submit" name="mod" value="%">
			<input type="submit" name="reset" value="Очистить форму">
			<hr>
			
		</form>
			
	</body>
</html>

