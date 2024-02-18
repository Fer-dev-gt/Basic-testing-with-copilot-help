<?php
//Escribe una función que se conecte a una API y devuelva el resultado de la consulta en un array asociativo.

function getApiData($url){
    $json = file_get_contents($url);
    $data = json_decode($json, true);
    return $data;
}

$result = getApiData('https://jsonplaceholder.typicode.com/posts');
print_r($result);


// Crea una función para mostrar el array asociativo de getApi() en una tabla HTML. La tabla tendrá una fila con los nombres de las columnas y una fila por cada elemento del array.
/**
 * Displays the API data in a table format.
 *
 * @param array $data The API data to be displayed.
 * @return void
 */
function showApiData($data){
    echo '<table border="1">';
    echo '<tr>';
    foreach($data[0] as $key => $value){
        echo '<th>' . $key . '</th>';
    }
    echo '</tr>';
    foreach($data as $row){
        echo '<tr>';
        foreach($row as $key => $value){
            echo '<td>' . $value . '</td>';
        }
        echo '</tr>';
    }
    echo '</table>';
}

showApiData($result);


// Crea una función que procese el resultado de getApi() y si detecta que hay valores numéricos los reemplace por un text "ES NUMERICO"
/**
 * Replaces numeric values in a multidimensional array with the string 'ES NUMERICO'.
 *
 * @param array $data The input array.
 * @return array The modified array with numeric values replaced.
 */
function replaceNum($data){
    foreach($data as $key => $row){
        foreach($row as $key2 => $value){
            if(is_numeric($value)){
                $data[$key][$key2] = 'ES NUMERICO';
            }
        }
    }
    return $data;
}

showTable(replaceNum($result));