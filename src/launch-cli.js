#!/usr/bin/env node
//this is merely a helper file to boostrap es6 modules based code without the need to transpile files
require('babel-core/register')({ignore:true , presets:['es2015']})
require('./cli')
