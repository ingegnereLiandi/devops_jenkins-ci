pipeline{
    agent any
    tools{
        nodejs "node 16.17.0"
    }

    stages{
        stage('Clonar Repositorio'){
            steps{
                checkout([$class:'GitSCM', branches:[[name:'*/main']], userRemoteConfigs:[[url:'https://github.com/ingegnereLiandi/devops_jenkins-ci.git']]])
            }
        }

        stage('Instalar dependencias'){
            steps{
                //dir('repositorio.it/devops_jenkins-ci'){
                    bat "node -v"
                    bat 'npm install'
                    bat 'npx run cy:run'
                }
        }
        
       stage('Executar Testes') {
            steps {      
                dir('repositorio.it/devops_jenkins-ci'){ 
                    bat 'npx run cy:run'
                    }
                }
            }
        }
    }
//}
