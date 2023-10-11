pipeline{
    agent any
    environment {
        CYPRESS_CONFIG_FILE = 'C:\ProgramData\Jenkins\.jenkins\workspace\ebac_jenkins_ci\repositorio.it\devops_jenkins-ci\cypress.config.js'
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
                
                dir('repositorio.it/devops_jenkins-ci'){ 
                    bat "npx cypress run --config-file $CYPRESS_CONFIG_FILE"
                    bat 'npx cypress run'
                     
                   }
                }
            }
        }
    }

