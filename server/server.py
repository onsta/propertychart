import connexion
from flask_cors import CORS

app = connexion.App(__name__, specification_dir="./")

app.add_api("swagger.yml")

CORS(app.app)

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=8081, debug=True)

