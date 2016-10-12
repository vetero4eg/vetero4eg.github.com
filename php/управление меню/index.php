<?php
/**
 * Набор функций для управления меню. При запуске страницы будет отображаться результат работы кода.
 * По умолчанию все имена пунктов уникальные
 *  Управление меню сайта позволяет:
 * 	Добавлять пункты в любые категории (включая корневик) любой степени вложенности;
 * 	Переименовывать пункты и категории;
 *	Устанавливать ссылки для пунктов и категорий (сохраняет в отдельный параметр);
 *	Удалять пункты или категории (вместе с дочерними пунктами) --требует доработки
 *	Перемещать пункты (и категории вроде тоже) в указанную категорию, корневик по умолчанию (зависит от предыдщуего метода и тоже может сбоить)
 */

class Item {
	public $name;
	public $url;
	public $hidden_url;
// хранит все объекты класса
	public static $AllItems;
// хранит всех "детей"-подкатегории объекта
	public $subItem;

	public function __construct($name, $url=""){
		$this->name = $name;
		$this->url = $url;
		self::$AllItems[] = $this;
	}

// Находит в меню пункт с именем $name и возвращает его как объект 
	public static function findItem($name){
		foreach (self::$AllItems as $key => $object){
			if($name == $object->name)
				return $object;
		}
	}

// Получает массив всех пунктов, которые не являются категориями
	public static function getPoint(){
		$point = array();
		foreach (self::$AllItems as $key => $object){
			if($object->subItem==NULL)
				$point[] = $object;
		}
		return $point;
	}

// Получает массив всех категорий (вычислить расхождением массивов не удалось)
	public static function getCategory(){
		$category = array();
		foreach (self::$AllItems as $key => $object){
			if(!($object->subItem==NULL))
				$category[] = $object;
		}
		return $category;
	}

// Добавляет подпункт $name в категорию $item возвращает массив подпунктов этой категории
	public static function addSubItem($item, $name){
		$parent = self::findItem($item);
		$parent->subItem[] = new Item($name);
		return $parent->subItem;
	}

// Удаляет пункт или категорию $ name целиком
	public static function deleteItem($name){
		   $point=self::findItem($name);
		   foreach (self::$AllItems as $key => $object){
		   		if($point==$object)
		   			unset(self::$AllItems[$key]);
		   		if(!($object->subItem==NULL))
		   			foreach ($object->subItem as $k => $ob){
		   				if($point==$ob)
		   					unset($object->subItem[$k]);
		   		}
		   }
	}

// Переименовывает пункт меню $name в $newName
	public static function renameItem($name, $newName){
		$item=self::findItem($name);
		$item->name=$newName;
		return $item->newName;
	}

// Прячет ссылку в специальное свойство, откуда ее можно будет достать,
// если категория снова станет просто пунктом
	public function hideUrl(){
		if(!($this-url=="")):
		$this->hidden_url=$this->url;
		$this->url="";
		endif;
		return $this->hidden_url; 
	}

// Задает ссылку для любого пункта $name (скрывает для категории)
	public static function setUrl($name, $url=""){
		$point=self::findItem($name);
		// Категория
		if(!($point->subItem==NULL)){
			if(!($url=="")){
				$point->hidden_url=$url;
			}elseif(!($point->url=="")){
				$point->hidden_url=$point->url;
				$point->url="";
			}
		}else{
		//Дочерний пункт
			if(!($url=="")){
				$point->url=$url;
			}elseif(!($point->hidden_url==NULL)){
				$point->url=$point->hidden_url;
				$point->hidden_url="";
			}
		}
		return $point->url;
	}

// Перемещает пункт $name в категорию $category (по умолчанию в корневик)
	public static function replaceItem($name, $category="Menu"){
		//Если объект $name еще не создан, создаем его в нужной категории
		if(!isset($name)){
			self::addSubItem($category, $name);
		}else{
			$point=self::findItem($name);
			self::deleteItem($name);
			$place=self::findItem($category);
			$place->subItem[] = $point;
			self::setUrl($name);
		}
	}

// Метод строит меню на html
	public static function realize(){
		foreach (self::getCategory() as $key => $object) {
			echo "<ul>";
				echo $object->name;
			foreach ($object->subItem as $k => $ob) {
				if(!(in_array($ob, self::getCategory()))){
				echo "<li>";
					echo "<a href=\"".$ob->url."\">".$ob->name."</a>";
				echo "</li>";
			}
			}
			echo "</ul>";
		}
	}

}

$menu = new Item("Menu");
for ($i=1; $i<=3; $i++){
	Item::addSubItem("Menu", "Point ".$i);
}
for($i=1; $i<=3; $i++){
	Item::addSubItem("Point 1", "Point 1-".$i);
	Item::addSubItem("Point 2", "Point 2-".$i);
}

Item::setUrl("Point 2", "www.ya.ru");
Item::setUrl("Point 2-1", "www.google.com");
Item::setUrl("Point 2-2", "www.ya.ru");

Item::addSubItem("Point 2-1", "Point 2-1-1");

Item::renameItem("Point 2", "Поисковики");
Item::renameItem("Point 2-1", "Google");
Item::renameItem("Point 2-2", "Yandex");

Item::deleteItem("Point 2-3");

Item::realize();
var_dump(Item::$AllItems);


?>