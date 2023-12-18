from flask import Flask
from config import config

app=Flask(__name__)



@app.route('/candidatos')
def listar_candidatos():
    try:

        cursor=conexion.connection.cursor()
        sql="SELECT codigo, nombre, creditos FROM curso"
        cursor.execute(sql)
        datos=cursor.fetchall()
        print(datos)
        return "Cursos listados!"
    except Exception as ex:
        return "Error"
    
def pagina_no_encontrada(error):
    return "<h1>La Página que intentas buscar no existe.</h1>"
if __name__ == '__main__':
    app.config.from_object(config['development'])
    app.register_error_handler(404,pagina_no_encontrada)
    app.run()

