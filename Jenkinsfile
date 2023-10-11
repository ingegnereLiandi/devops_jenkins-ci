pipeline{
    agent any
    environment {
        CYPRESS_CONFIG_FILE = '/repositorio.it/devops_jenkins-ci/cypress/cypress.config.js'
    }
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
                bat 'node -v'
                bat 'npm install'    
            }
        }
    
       stage('Executar Testes') {
            steps { 
                
                //dir('repositorio.it/devops_jenkins-ci'){ 
                    //bat "npx cypress run --config-file $CYPRESS_CONFIG_FILE"
                    bat 'NO_COLOR=1 npx cypress run'
                     
                   //}
                }
            }
        }
    }

