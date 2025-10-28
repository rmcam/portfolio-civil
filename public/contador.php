<?php
$archivo = "visitas.txt";
$cookie_name = "unique_visitor";
$cookie_expire = time() + (86400 * 30); // 86400 = 1 día, aquí 30 días

// Si el archivo no existe, lo crea con 0
if (!file_exists($archivo)) {
    file_put_contents($archivo, 0);
}

// Verifica si la cookie de visitante único ya existe
if (!isset($_COOKIE[$cookie_name])) {
    // Lee el contenido
    $visitas = (int)file_get_contents($archivo);

    // Suma 1
    $visitas++;

    // Guarda el nuevo valor
    file_put_contents($archivo, $visitas);

    // Establece la cookie para que no cuente de nuevo al mismo usuario por 30 días
    setcookie($cookie_name, "1", $cookie_expire, "/");
} else {
    // Si la cookie existe, simplemente lee el número actual de visitas sin incrementarlo
    $visitas = (int)file_get_contents($archivo);
}

// Devuelve el número
echo $visitas;
?>
