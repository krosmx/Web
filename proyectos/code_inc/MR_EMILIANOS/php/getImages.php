<?php
class objectType{
    public $response;
    public $files;
    
    public function dataSet($response, $files){
        $this->response = $response;
        $this->files = $files;
    }
}
class getImages{
    private $path;
    public function checkData(){
        if( !isset($_REQUEST["carousel"] ) )
            die("{response:false}");
        else
            $this->getElements( $_REQUEST["carousel"] );
    }
    private function getElements( $element){
        $directory;
        $path = ".";
        $directoryImages = "";
        $cad = null;
        switch ( $element ){
            case "main_carousel":                
                $directoryImages = "images/main_carousel";
            break;
            
            default:
                die("{response:false}");
            break;
        }
        $path=$path."/".$directoryImages;
        $directory = opendir( $path ) or die("{response:false}");
        while(false !== ($file  = readdir($directory)) ){
            if( !is_dir( $path.$file ) )
                $cad[]=$directoryImages."/".$file;            
        }
        
        $resp = new objectType();
        $resp->dataSet(true, $cad);
        echo json_encode($resp);
    }
}

$carousel = new getImages();
$carousel->checkData();
?>