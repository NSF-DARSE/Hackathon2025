import { useState, useEffect } from 'react';
import { PowerBIEmbed } from 'powerbi-client-react';
import { motion, AnimatePresence } from 'framer-motion';

// Replace these with your actual PowerBI report details
const reportConfig = {
  type: 'report',
  embedUrl: undefined as string | undefined,
  tokenType: 1, // 1 = AAD token, 2 = embed token
  settings: {
    panes: {
      filters: {
        expanded: false,
        visible: true
      }
    },
    background: 1, // 0 = transparent, 1 = white
  }
};

type Tab = 'dashboard' | 'predictive';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<Tab>('dashboard');

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-primary-500 to-primary-700">
        <div className="text-center p-8 bg-white rounded-xl shadow-2xl">
          <h1 className="text-3xl font-bold text-primary-700 mb-4">Loading Dashboard</h1>
          <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="loading-bar"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-500 to-primary-700 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Analytics Dashboard</h1>
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`px-4 py-2 rounded-t-lg font-medium ${
                activeTab === 'dashboard' 
                  ? 'bg-white text-primary-700' 
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab('predictive')}
              className={`px-4 py-2 rounded-t-lg font-medium ${
                activeTab === 'predictive' 
                  ? 'bg-white text-primary-700' 
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              Predictive Analysis
            </button>
          </div>
        </header>

        <main className="bg-white rounded-lg shadow-2xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="p-4 md:p-6"
            >
              {activeTab === 'dashboard' ? (
                <div className="h-[70vh] min-h-[500px]">
                  <PowerBIEmbed
                    embedConfig={{
                      ...reportConfig,
                      embedUrl: 'https://app.powerbi.com/view?r=eyJrIjoiNjBkNjdjNDYtYzZhNi00MTg5LWE2NTgtZGMyYTFkYTVjMzNlIiwidCI6ImE2OTg2NjdkLTg4MTctNGFkOS1hN2YyLWJiMjg3Zjg2N2U1ZiIsImMiOjF9', // Replace with your PowerBI embed URL
                      tokenType: 1,
                    }}
                    cssClassName="h-full w-full"
                    getEmbeddedComponent={(embeddedReport) => {
                      // Handle report load
                      console.log('Report loaded', embeddedReport);
                    }}
                  />
                </div>
              ) : (
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-6">Predictive Analysis</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Model Input</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Feature 1
                          </label>
                          <input
                            type="number"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Enter value"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Feature 2
                          </label>
                          <input
                            type="number"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Enter value"
                          />
                        </div>
                        <button className="w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                          Predict
                        </button>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Prediction Result</h3>
                      <div className="bg-white p-4 rounded-md border border-gray-200">
                        <p className="text-gray-600">Enter values and click "Predict" to see results</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </main>

        <footer className="mt-8 text-center text-white/80 text-sm">
          <p>© {new Date().getFullYear()} Analytics Dashboard. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
