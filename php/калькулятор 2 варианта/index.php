
<?php
	$p1=htmlspecialchars($POST_["p1"]);
	$p2=htmlspecialchars($POST["p2"]);
	if(isset($_POST['p1']) && isset($_POST['p2']) && is_numeric($_POST['p1']) && is_numeric($_POST['p2'])){
		$p1=$_POST['p1'];
		$p2=$_POST['p2'];
		$oper=$_POST['operation'];
		switch ($oper) {
			case 'plus':
				$result=$p1+$p2;
				$p=selected;
				break;
			case 'minus':
				$result=$p1-$p2;
				$m=selected;
				break;
			case 'mult':
				$result=$p1*$p2;
				$mu=selected;
				break;
			case 'div':
				$d=selected;
				if($p2!=0){
				$result=$p1/$p2;}
				else $result="На ноль делить нельзя";
				break;
			case 'mod':
				$mod=selected;
				if($p2!=0){
				$result=$p1%$p2;}
				else $result="На ноль делить нельзя";
				break;	
			default:
				$result= "Выберите одну из операций";
				break;
			}
		}else{
		$result = "Введите параметры";
	}if(isset($_POST['reset'])){
			$p1=$p2=$result=$p=$m=$mu=$d=$mod=0; $s=selected;
		}
?>
<html>
	<head>
		<title>Calculator</title>
	</head>
	<body>
		<form method="post">
			<input type="text" name="p1" value="<?=$p1?>"> 
			<select size="1" name="operation">
				<option <?=$s?>value="">...</option>
				<option <?=$p?> value="plus" >+</option>
				<option <?=$m?> value="minus" >-</option>
				<option <?=$mu?> value="mult" >*</option>
				<option <?=$d?> value="div" >/</option>
				<option <?=$mod?> value="mod" >%</option>
			</select>	
			<input type="text" name="p2" value="<?=$p2?>">
			<input type="submit" name="=" value="=">
			<input type="text" value="<?=$result?>">
			<hr>
			<input type="submit" name="reset" value="Сброс">
		</form>
	</body>
</html>

