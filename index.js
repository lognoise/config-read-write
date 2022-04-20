'use strict';

/**
* @class ConfigReaderWriter
* @author: Lognoise
* @version: 0.2
* @description: Reads config infos from files and sets them @global.
*/

// ** Module dependencies.
const yaml = require('js-yaml');
const fs = require('fs');

class ConfigReadWrite {
	/**
	* Reads a config file
	*
	* @param {string} filename The name of config file
	* @return {object} The document
	*
	*/
	constructor () {
		this.path = '';
		this.config = {};
	}

	async read (path) {
		try {
			var doc = await yaml.load(fs.readFileSync(path, 'utf8'));
		} catch (error) {
			console.error('Cannot read yml file: ', error);
		}
		this.config = doc;
		return null;
	}

	get () {
		return this.config;
	}

	replace () {
		return null;
	}

	write () {
		return null;
	}
}

module.exports = ConfigReadWrite;
